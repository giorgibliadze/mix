import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems,Results} from "./IndustryBlocks";
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
 return <div className="industry ecommerce"><EcommerceHero d={d} visual={visual} locale={locale}/><Problems d={d} className="ecommerce-problems"/><ProductDiscovery visual={visual}/><PurchaseJourney visual={visual}/><CheckoutPreview visual={visual}/><OrderManagement visual={visual}/><EcommerceAiSection visual={visual}/><DeliveryWorkflow visual={visual}/><Results d={d} label={dictionary.common.results}/><FAQ d={d}/><EcommerceFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
