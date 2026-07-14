import {BellRing,CalendarSync,GitBranch,Inbox,RefreshCcw,UserRoundCheck} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {HealthcareReveal} from "./HealthcareReveal";

const icons=[Inbox,CalendarSync,BellRing,RefreshCcw,GitBranch,UserRoundCheck];
export function HealthcareAutomation({visual}:{visual:Dictionary["healthcareVisual"]}){
 return <HealthcareReveal className="healthcare-section"><div className="rounded-[2rem] border border-[#19444b]/10 bg-[#113a43] p-6 text-white sm:p-10 lg:p-12"><div className="grid gap-6 lg:grid-cols-[.78fr_1.22fr]"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#75cec0]">{visual.automationEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{visual.automationTitle}</h2><p className="mt-5 leading-8 text-[#b3cacb]">{visual.automationText}</p><p className="mt-5 text-xs text-[#8fb2b5]">{visual.automationDisclaimer}</p></div><div className="grid gap-3 sm:grid-cols-2">{visual.automationItems.map((item,index)=>{const Icon=icons[index];return <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4"><Icon size={19} className="text-[#75cec0]"/><p className="mt-4 text-sm font-semibold leading-6">{item}</p></div>})}</div></div></div></HealthcareReveal>;
}
