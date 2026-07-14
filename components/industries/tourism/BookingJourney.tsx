import {CalendarDays,CheckCircle2,CreditCard,Map,Search,SlidersHorizontal} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {TourismReveal} from "./TourismReveal";

const icons=[Search,CalendarDays,SlidersHorizontal,Map,CheckCircle2,CreditCard];
export function BookingJourney({visual}:{visual:Dictionary["tourismVisual"]}){
 return <TourismReveal className="tourism-section"><div className="rounded-[2rem] border border-[#71c9c0]/20 bg-[#082c35] p-5 sm:p-9 lg:p-12"><p className="eyebrow">{visual.journeyEyebrow}</p><div className="mt-4 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{visual.journeyTitle}</h2><p className="max-w-xl leading-8 text-[#a9c4c6] lg:justify-self-end">{visual.journeyText}</p></div><ol className="tourism-journey mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">{visual.journeySteps.map((item,index)=>{const Icon=icons[index];return <li key={item} className="relative rounded-2xl border border-white/10 bg-white/4 p-4"><span className="flex items-center justify-between text-[#79cfc4]"><Icon size={20}/><b className="text-xs opacity-60">0{index+1}</b></span><p className="mt-7 text-sm font-semibold">{item}</p></li>})}</ol></div></TourismReveal>;
}
