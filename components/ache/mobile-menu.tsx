"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/products";
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-menu"><button aria-label={open ? "Fechar categorias" : "Abrir categorias"} aria-expanded={open} aria-controls="mobile-categories" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>{open && <nav id="mobile-categories" aria-label="Categorias no celular"><Link href="/" onClick={() => setOpen(false)}>Início</Link>{categories.map((category) => <Link key={category.slug} href={`/categoria/${category.slug}`} onClick={() => setOpen(false)}>{category.name}</Link>)}</nav>}</div>;
}
