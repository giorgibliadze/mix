import {ArrowRight,Workflow} from "lucide-react";
import type {Dictionary,IndustryCopy,Locale} from "@/lib/i18n";
import {LocalizedLink} from "@/components/LocalizedLink";
import {AiAutomationReveal} from "./AiAutomationReveal";

export function AiAutomationFinalCTA({d,visual,locale}:{d:IndustryCopy;visual:Dictionary["aiAutomationVisual"];locale:Locale}){
 return <AiAutomationReveal className="ai-automation-section pb-[calc(6rem+env(safe-area-inset-bottom))]"><div className="relative overflow-hidden rounded-[2rem] border border-[#6e62e4]/25 bg-[#101a36] p-7 text-center sm:p-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(100,89,220,.28),transparent_50%)]"/><div className="relative"><Workflow className="mx-auto text-[#68d9e7]"/><p className="eyebrow mt-6">{d.finalCta}</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{visual.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#9eabc3]">{visual.finalText}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><LocalizedLink locale={locale} href="/contact?industry=ai-automation" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold">{visual.finalPrimary}<ArrowRight size={17}/></LocalizedLink><a href="#automation-workflow" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 font-semibold">{visual.finalSecondary}</a></div></div></div></AiAutomationReveal>;
}
