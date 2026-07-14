import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems} from "./IndustryBlocks";
import {BeforeAfter,BusinessBenefits,CompetitiveAdvantage,FeatureOutcomes,NextHubApproach,WebsiteWhy} from "./IndustryNarrativeSections";
import {AppointmentInterface} from "./healthcare/AppointmentInterface";
import {BookingJourney} from "./healthcare/BookingJourney";
import {DoctorDiscovery} from "./healthcare/DoctorDiscovery";
import {HealthcareAiTrust} from "./healthcare/HealthcareAiTrust";
import {HealthcareAutomation} from "./healthcare/HealthcareAutomation";
import {HealthcareFinalCTA} from "./healthcare/HealthcareFinalCTA";
import {HealthcareHero} from "./healthcare/HealthcareHero";
import {ServiceCatalog} from "./healthcare/ServiceCatalog";

export function HealthcarePage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.healthcareVisual;
 const narrative=dictionary.industryNarrative.healthcare;
 return <div className="industry healthcare"><HealthcareHero d={d} visual={visual} locale={locale}/><Problems d={d} className="healthcare-problems"/><WebsiteWhy narrative={narrative} common={dictionary.common}/><DoctorDiscovery visual={visual}/><ServiceCatalog visual={visual}/><BookingJourney visual={visual}/><BusinessBenefits d={d} narrative={narrative} common={dictionary.common}/><FeatureOutcomes d={d} narrative={narrative} common={dictionary.common}/><AppointmentInterface visual={visual}/><HealthcareAutomation visual={visual}/><HealthcareAiTrust visual={visual}/><CompetitiveAdvantage narrative={narrative} common={dictionary.common}/><BeforeAfter d={d} common={dictionary.common}/><NextHubApproach d={d} common={dictionary.common}/><FAQ d={d}/><HealthcareFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
