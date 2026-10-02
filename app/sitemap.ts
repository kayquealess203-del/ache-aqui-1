import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vitta.example";
  return ["", "/feed", "/explore", "/search", "/login", "/register", "/messages", "/notifications", "/settings"].map(path => ({ url: `${base}${path}`, lastModified: new Date() }));
}
