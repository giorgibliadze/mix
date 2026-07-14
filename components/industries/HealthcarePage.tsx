import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems,Results} from "./IndustryBlocks";
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
 return <div className="industry healthcare"><HealthcareHero d={d} visual={visual} locale={locale}/><Problems d={d} className="healthcare-problems"/><DoctorDiscovery visual={visual}/><ServiceCatalog visual={visual}/><BookingJourney visual={visual}/><AppointmentInterface visual={visual}/><HealthcareAutomation visual={visual}/><HealthcareAiTrust visual={visual}/><Results d={d} label={dictionary.common.results}/><FAQ d={d}/><HealthcareFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
