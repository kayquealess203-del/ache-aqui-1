import Link from "next/link";
import { FeedbackSection } from "@/components/ache/feedback";
import { Brand } from "./brand";
import { categories } from "@/data/products";
import { MobileMenu } from "./mobile-menu";
export function SiteHeader() { return <header className="site-header"><Link href="/" aria-label="Ache Aqui — início"><Brand /></Link><nav aria-label="Navegação principal"><Link href="/">Início</Link>{categories.map((category) => <Link key={category.slug} href={`/categoria/${category.slug}`}>{category.name}</Link>)}</nav><MobileMenu /></header>; }
export function SiteFooter() { return <footer><FeedbackSection /><div className="footer-top"><Brand /><p>Achadinhos e descobertas<br />da internet.</p></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Ache Aqui</p><div><Link href="/">Início</Link><Link href="/#categorias">Categorias</Link><Link href="#">Sobre</Link><Link href="#">Contato</Link><Link href="#">Política de Privacidade</Link><Link href="#">Termos de Uso</Link></div></div></footer>; }
