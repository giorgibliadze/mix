import {CalendarDays,CloudCog,Database,FileSpreadsheet,LayoutDashboard,Mail,MessagesSquare,PlugZap} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {AiAutomationReveal} from "./AiAutomationReveal";

const icons=[Database,Mail,MessagesSquare,LayoutDashboard,CalendarDays,FileSpreadsheet,CloudCog,PlugZap];
export function IntegrationNetwork({visual}:{visual:Dictionary["aiAutomationVisual"]}){
 return <AiAutomationReveal className="ai-automation-section"><div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">{visual.integrationsEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{visual.integrationsTitle}</h2><p className="mt-5 leading-8 text-[#9ba9c2]">{visual.integrationsText}</p><p className="mt-5 text-xs text-[#7787a7]">{visual.integrationsDisclaimer}</p></div><div className="ai-integration-network relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/10 bg-[#0b142a] p-5 sm:grid-cols-4 sm:p-8">{visual.integrations.map((item,index)=>{const Icon=icons[index];return <div key={item} className="relative z-10 rounded-xl border border-white/10 bg-[#111c37] p-4 text-center"><Icon className="mx-auto text-[#6ed9e7]" size={20}/><p className="mt-3 text-xs font-semibold">{item}</p></div>})}<div className="absolute inset-1/3 grid place-items-center rounded-full border border-[#766af0]/30 bg-[#131d3e] text-xs font-bold text-[#8c81f4] shadow-[0_0_35px_rgba(113,99,235,.2)]">{visual.integrationCore}</div></div></div></AiAutomationReveal>;
}
