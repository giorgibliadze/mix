import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems} from "./IndustryBlocks";
import {BeforeAfter,BusinessBenefits,CompetitiveAdvantage,FeatureOutcomes,NextHubApproach,WebsiteWhy} from "./IndustryNarrativeSections";
import {CheckoutPreview} from "./ecommerce/CheckoutPreview";
import {DeliveryWorkflow} from "./ecommerce/DeliveryWorkflow";
import {EcommerceAiSection} from "./ecommerce/EcommerceAiSection";
import {EcommerceFinalCTA} from "./ecommerce/EcommerceFinalCTA";
import {EcommerceHero} from "./ecommerce/EcommerceHero";
import {OrderManagement} from "./ecommerce/OrderManagement";
import {ProductDiscovery} from "./ecommerce/ProductDiscovery";
import {PurchaseJourney} from "./ecommerce/PurchaseJourney";

export function EcommercePage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.ecommerceVisual;
 const narrative=dictionary.industryNarrative.ecommerce;
 return <div className="industry ecommerce"><EcommerceHero d={d} visual={visual} locale={locale}/><Problems d={d} className="ecommerce-problems"/><WebsiteWhy narrative={narrative} common={dictionary.common}/><ProductDiscovery visual={visual}/><PurchaseJourney visual={visual}/><BusinessBenefits d={d} narrative={narrative} common={dictionary.common}/><FeatureOutcomes d={d} narrative={narrative} common={dictionary.common}/><CheckoutPreview visual={visual}/><OrderManagement visual={visual}/><EcommerceAiSection visual={visual}/><DeliveryWorkflow visual={visual}/><CompetitiveAdvantage narrative={narrative} common={dictionary.common}/><BeforeAfter d={d} common={dictionary.common}/><NextHubApproach d={d} common={dictionary.common}/><FAQ d={d}/><EcommerceFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
