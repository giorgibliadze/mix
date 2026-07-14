import {ArrowRight,ShoppingBag} from "lucide-react";
import type {Dictionary,IndustryCopy,Locale} from "@/lib/i18n";
import {LocalizedLink} from "@/components/LocalizedLink";
import {EcommerceReveal} from "./EcommerceReveal";

export function EcommerceFinalCTA({d,visual,locale}:{d:IndustryCopy;visual:Dictionary["ecommerceVisual"];locale:Locale}){
 return <EcommerceReveal className="ecommerce-section pb-[calc(6rem+env(safe-area-inset-bottom))]"><div className="relative overflow-hidden rounded-[2rem] border border-[#7f6def]/25 bg-[#17142d] p-7 text-center sm:p-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,103,238,.28),transparent_50%)]"/><div className="relative"><ShoppingBag className="mx-auto text-[#9d91f5]"/><p className="eyebrow mt-6">{d.finalCta}</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{visual.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">{visual.finalText}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><LocalizedLink locale={locale} href="/contact?industry=ecommerce" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold">{visual.finalPrimary}<ArrowRight size={17}/></LocalizedLink><a href="#ecommerce-discovery" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 font-semibold">{visual.finalSecondary}</a></div></div></div></EcommerceReveal>;
}
