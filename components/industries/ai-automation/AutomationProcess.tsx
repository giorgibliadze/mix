import {CheckCircle2} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {AiAutomationReveal} from "./AiAutomationReveal";

export function AutomationProcess({visual}:{visual:Dictionary["aiAutomationVisual"]}){
 return <AiAutomationReveal className="ai-automation-section"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">{visual.processEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{visual.processTitle}</h2><p className="mt-5 leading-8 text-[#9ba9c2]">{visual.processText}</p></div><ol className="grid gap-3 sm:grid-cols-2">{visual.processSteps.map((item,index)=><li key={item} className={`flex items-center gap-4 rounded-xl border border-white/10 bg-white/4 p-4 ${index===visual.processSteps.length-1?"sm:col-span-2":""}`}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#151f3d] text-xs font-bold text-[#7164e8]">0{index+1}</span><p className="text-sm font-semibold">{item}</p>{index===visual.processSteps.length-1&&<CheckCircle2 className="ml-auto text-[#63d8e7]" size={18}/>}</li>)}</ol></div></AiAutomationReveal>;
}
