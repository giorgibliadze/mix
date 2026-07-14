import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems} from "./IndustryBlocks";
import {BeforeAfter,BusinessBenefits,CompetitiveAdvantage,FeatureOutcomes,NextHubApproach,WebsiteWhy} from "./IndustryNarrativeSections";
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
 const narrative=dictionary.industryNarrative["ai-automation"];
 return <div className="industry ai-automation"><AiAutomationHero d={d} visual={visual} locale={locale}/><Problems d={d} className="ai-automation-problems"/><WebsiteWhy narrative={narrative} common={dictionary.common}/><WorkflowPreview visual={visual}/><AiAssistants visual={visual}/><BusinessBenefits d={d} narrative={narrative} common={dictionary.common}/><FeatureOutcomes d={d} narrative={narrative} common={dictionary.common}/><IntegrationNetwork visual={visual}/><DocumentProcessing visual={visual}/><AutomationInsights visual={visual}/><CompetitiveAdvantage narrative={narrative} common={dictionary.common}/><BeforeAfter d={d} common={dictionary.common}/><AutomationProcess visual={visual}/><NextHubApproach d={d} common={dictionary.common}/><FAQ d={d}/><AiAutomationFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
