import type { Metadata } from "next";
import "./globals.css";
import "./catalog.css";
import "./design-refinement.css";
import "./color-refresh.css";
import "./product-card-refresh.css";
import "./art-direction.css";
import "./pastel.css";
import { Motion } from "@/components/ache/motion";
export const metadata: Metadata = { title: "Ache Aqui — achadinhos e descobertas", description: "Descubra produtos, novidades e achadinhos da internet em um só lugar." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" suppressHydrationWarning><body>{children}<Motion /></body></html>; }
