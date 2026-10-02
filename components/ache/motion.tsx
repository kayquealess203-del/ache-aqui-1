"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = preference.matches;
    const hero = document.querySelector<HTMLElement>(".hero");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const elements = document.querySelectorAll<HTMLElement>(".section-heading, .category, .recent-heading, .catalog-card, .closing-note");
    elements.forEach((element) => {
      element.classList.remove("is-revealed", "reveal-ready");
      if (reduced) return;
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      element.style.setProperty("--reveal-delay", `${Math.max(0, siblings.indexOf(element) % 3) * 65}ms`);
      element.classList.add("reveal-ready"); observer.observe(element);
    });
    let frame = 0;
    const update = () => {
      document.documentElement.classList.toggle("has-scrolled", window.scrollY > 40);
      if (hero) {
        const section = document.getElementById("categorias");
        const start = Math.max(0, (section?.offsetTop ?? hero.offsetHeight) - window.innerHeight);
        const end = Math.max(start + 1, (section?.offsetTop ?? hero.offsetHeight) - window.innerHeight * .65);
        const blend = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
        document.documentElement.style.setProperty("--section-blend", String(blend));
      }
      if (hero && !preference.matches) {
        const progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
        hero.style.setProperty("--hero-scroll", `${progress * (window.innerWidth <= 800 ? 24 : 72)}px`);
        hero.style.setProperty("--hero-scale", `${1 - progress * .1}`);
        hero.style.setProperty("--hero-turn", `${progress * 7}deg`);
        hero.style.setProperty("--copy-shift", `${progress * -26}px`);
        hero.style.setProperty("--copy-scale", `${1 - progress * .035}`);
      }
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onPointer = (event: PointerEvent) => {
      if (!hero || preference.matches || event.pointerType !== "mouse" || window.innerWidth <= 800) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width - .5) * 12}px`);
      hero.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height - .5) * 8}px`);
    };
    const reset = () => { hero?.style.setProperty("--pointer-x", "0px"); hero?.style.setProperty("--pointer-y", "0px"); };
    const onPreference = () => { reset(); hero?.style.setProperty("--hero-scroll", "0px"); hero?.style.setProperty("--hero-scale", "1"); hero?.style.setProperty("--hero-turn", "0deg"); elements.forEach((element) => element.classList.add("is-revealed")); };
    hero?.addEventListener("pointermove", onPointer); hero?.addEventListener("pointerleave", reset);
    preference.addEventListener("change", onPreference);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); hero?.removeEventListener("pointermove", onPointer); hero?.removeEventListener("pointerleave", reset); preference.removeEventListener("change", onPreference); elements.forEach((element) => element.classList.remove("reveal-ready")); };
  }, [pathname]);
  return null;
}
