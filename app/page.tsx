import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { categories, products } from "@/data/products";
import { Mark } from "@/components/ache/brand";
import { ProductCard } from "@/components/ache/product-card";
import { SiteHeader, SiteFooter } from "@/components/ache/site-frame";

export default function Home() {
  const feminineProducts = products.filter((product) => (product.category === "Moda" && product.subcategory !== "Moda Masculina") || product.id === "17");
  const featuredCategories = [...categories].sort((a, b) => (["moda", "acessorios"].includes(a.slug) ? 0 : 1) - (["moda", "acessorios"].includes(b.slug) ? 0 : 1));
  return <main>
    <SiteHeader />
    <section id="inicio" className="hero">
      <div className="hero-copy"><p className="eyebrow"><span /> Moda, detalhes e descobertas</p><h1>Ache o que<br /><em>vale a pena.</em></h1><p className="hero-text">Moda feminina, acessórios e achadinhos para descobrir o que combina com você.</p><div className="hero-actions"><a className="button button--dark" href="#achadinhos">Explorar achadinhos <ArrowRight size={18} /></a><Link className="text-link" href="/categoria/moda">Ver moda feminina <ArrowDownRight size={18} /></Link></div></div>
      <div className="discovery-art brand-hero" role="img" aria-label="Logo ACHE AQUI"><div className="brand-orbit" aria-hidden="true" /><div className="brand-medallion"><Mark /></div><div className="brand-hero-wordmark" aria-hidden="true">ACHE <span>AQUI</span></div><p className="brand-hero-note" aria-hidden="true">Descobertas do seu jeito.</p></div>
    </section>
    <section id="categorias" className="categories section"><div className="section-heading"><p className="eyebrow"><span /> Comece por aqui</p><h2>O que você está<br />procurando?</h2></div><div className="category-grid">{featuredCategories.map((category, index) => <Link href={`/categoria/${category.slug}`} className="category" key={category.slug}><span>0{index + 1}</span><strong>{category.name}</strong><ArrowDownRight size={20} /></Link>)}</div></section>
    <section id="achadinhos" className="recent section"><div className="recent-heading"><div><p className="eyebrow"><span /> Para o seu estilo</p><h2>Achadinhos femininos</h2></div><p>Roupas e acessórios para descobrir, combinar e fazer seus.</p></div><div className="product-grid">{feminineProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div><div className="recent-foot"><a className="text-link" href="#categorias">Explore outras categorias <ArrowRight size={18} /></a></div></section>
    <section className="closing-note"><p>Uma curadoria em construção,<br /><i>feita para quem gosta de descobrir.</i></p></section>
    <SiteFooter />
  </main>;
}
