import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { getCategory, products } from "@/data/products";
import { ProductCard } from "@/components/ache/product-card";
import { SiteFooter, SiteHeader } from "@/components/ache/site-frame";

export async function generateStaticParams() { return ["eletronicos", "informatica-e-games", "casa-e-cozinha", "fitness-e-saude", "moda", "acessorios"].map((slug) => ({ slug })); }
export default async function CategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ sub?: string }> }) {
  const { slug } = await params; const { sub } = await searchParams; const category = getCategory(slug); if (!category) notFound();
  const listed = products.filter((product) => product.categorySlug === slug && (!sub || product.subcategory === sub));
  return <main><SiteHeader /><section className="catalog-hero"><Link href="/" className="back-link"><ArrowLeft size={16} /> Voltar ao início</Link><p className="eyebrow"><span /> Categoria</p><h1>{category.name}</h1><p>Confira os produtos cadastrados nesta categoria.</p></section><section className="catalog section"><div className="subcategories"><Link className={!sub ? "active" : ""} href={`/categoria/${slug}`}>Todos</Link>{category.subcategories.map((item) => <Link className={sub === item ? "active" : ""} href={`/categoria/${slug}?sub=${encodeURIComponent(item)}`} key={item}>{item}</Link>)}</div>{listed.length > 0 ? <div className="product-grid">{listed.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <p className="empty-state">Ainda não há produtos cadastrados nesta subcategoria.</p>}</section><SiteFooter /></main>;
}
