export function Price({ price, capturedAt }: { price?: number; capturedAt?: string }) {
  if (typeof price !== "number") return <p className="price-note">Oferta indisponível no momento</p>;
  const money = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const date = capturedAt && new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo" }).format(new Date(`${capturedAt}T12:00:00`));
  return <div className="static-price"><strong>{money}</strong><small>Preço visto na loja em {date}. Pode mudar.</small></div>;
}
