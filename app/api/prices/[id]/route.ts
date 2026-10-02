import { products } from "@/data/products";
import { mercadoLivreBindings } from "@/data/mercado-livre-bindings";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((entry) => entry.id === id);
  const absent = () => Response.json({ state: "unavailable" }, { headers: { "Cache-Control": "no-store" } });
  if (!product) return Response.json({ error: "not_found" }, { status: 404 });
  const binding = mercadoLivreBindings[id];
  const token = process.env.MERCADO_LIVRE_ACCESS_TOKEN;
  if (!token || !binding || binding.affiliateUrl !== product.affiliateUrl || !/^MLB\d+$/.test(binding.itemId)) return absent();
  // Variações exigem preço e contexto próprios. Não reutilizar preço do item-pai.
  if (binding.variationId !== undefined) return absent();
  try {
    const headers = { Authorization: `Bearer ${token}` };
    const [itemResponse, priceResponse] = await Promise.all([
      fetch(`https://api.mercadolibre.com/items/${binding.itemId}`, { headers, cache: "no-store", signal: AbortSignal.timeout(5000) }),
      fetch(`https://api.mercadolibre.com/items/${binding.itemId}/sale_price?context=channel_marketplace`, { headers, cache: "no-store", signal: AbortSignal.timeout(5000) }),
    ]);
    if (!itemResponse.ok || !priceResponse.ok) return absent();
    const item = await itemResponse.json();
    const price = await priceResponse.json();
    if (item.id !== binding.itemId || item.currency_id !== "BRL" || price.currency_id !== "BRL" || item.status !== "active" || (item.variations?.length ?? 0) > 0) return absent();
    if (typeof price.amount !== "number" || !Number.isFinite(price.amount) || price.amount <= 0) return absent();
    const previousPrice = typeof price.regular_amount === "number" && Number.isFinite(price.regular_amount) && price.regular_amount > price.amount ? price.regular_amount : undefined;
    return Response.json({ state: "verified", price: price.amount, previousPrice, checkedAt: new Date().toISOString(), source: "Mercado Livre" }, { headers: { "Cache-Control": "no-store" } });
  } catch { return absent(); }
}
