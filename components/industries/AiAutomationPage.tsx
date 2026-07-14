import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems,Results} from "./IndustryBlocks";
import {AiAssistants} from "./ai-automation/AiAssistants";
import {AiAutomationFinalCTA} from "./ai-automation/AiAutomationFinalCTA";
import {AiAutomationHero} from "./ai-automation/AiAutomationHero";
import {AutomationInsights} from "./ai-automation/AutomationInsights";
import {AutomationProcess} from "./ai-automation/AutomationProcess";
import {DocumentProcessing} from "./ai-automation/DocumentProcessing";
import {IntegrationNetwork} from "./ai-automation/IntegrationNetwork";
import {WorkflowPreview} from "./ai-automation/WorkflowPreview";

export function AiAutomationPage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.aiAutomationVisual;
 return <div className="industry ai-automation"><AiAutomationHero d={d} visual={visual} locale={locale}/><Problems d={d} className="ai-automation-problems"/><WorkflowPreview visual={visual}/><AiAssistants visual={visual}/><IntegrationNetwork visual={visual}/><DocumentProcessing visual={visual}/><AutomationInsights visual={visual}/><Results d={d} label={dictionary.common.results}/><AutomationProcess visual={visual}/><FAQ d={d}/><AiAutomationFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
