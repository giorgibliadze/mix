import {Bell,Building2,CalendarCheck,CheckCircle2,ClipboardPenLine,Stethoscope,UserRound} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {HealthcareReveal} from "./HealthcareReveal";

const icons=[Stethoscope,UserRound,Building2,CalendarCheck,ClipboardPenLine,CheckCircle2,Bell];
export function BookingJourney({visual}:{visual:Dictionary["healthcareVisual"]}){
 return <HealthcareReveal className="healthcare-section"><div className="rounded-[2rem] border border-[#1c8478]/15 bg-[#eaf5f3] p-5 sm:p-9 lg:p-12"><p className="eyebrow">{visual.journeyEyebrow}</p><div className="mt-4 grid gap-5 lg:grid-cols-[.75fr_1.25fr]"><h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{visual.journeyTitle}</h2><p className="max-w-xl leading-8 text-[#5b767b] lg:justify-self-end">{visual.journeyText}</p></div><ol className="healthcare-journey mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">{visual.journeySteps.map((item,index)=>{const Icon=icons[index];return <li key={item} className="relative rounded-2xl border border-[#17444b]/10 bg-white p-4"><div className="flex items-center justify-between text-[#168474]"><Icon size={19}/><b className="text-[10px] opacity-55">0{index+1}</b></div><p className="mt-6 text-xs font-semibold leading-5">{item}</p></li>})}</ol></div></HealthcareReveal>;
}
