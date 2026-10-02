import { Price } from "@/components/ache/price";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { SiteFooter, SiteHeader } from "@/components/ache/site-frame";
export async function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = getProduct(slug); if (!product) notFound(); return <main><SiteHeader /><article className="product-page"><Link href={`/categoria/${product.categorySlug}`} className="back-link"><ArrowLeft size={16} /> {product.category}</Link><div className="product-layout"><div className="product-image">{product.image ? <img src={product.image} alt={product.name} /> : <span>Imagem do produto<br />em breve</span>}<div className="product-image-orb" /></div><div className="product-info"><p className="eyebrow"><span /> {product.subcategory}</p><h1>{product.name}</h1><div className="store-note"><b>Loja</b><span>{product.store}</span></div><Price price={product.price} capturedAt={product.priceCapturedAt} /><a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="button button--dark">Ver oferta <ArrowUpRight size={18} /></a><p className="affiliate-note">Ao conferir a oferta, você será direcionado para a loja.</p></div></div></article><SiteFooter /></main>; }
