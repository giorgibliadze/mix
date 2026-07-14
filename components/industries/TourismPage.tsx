import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems} from "./IndustryBlocks";
import {BeforeAfter,BusinessBenefits,CompetitiveAdvantage,FeatureOutcomes,NextHubApproach,WebsiteWhy} from "./IndustryNarrativeSections";
import {AiTripPlanner} from "./tourism/AiTripPlanner";
import {BookingExperience} from "./tourism/BookingExperience";
import {BookingJourney} from "./tourism/BookingJourney";
import {DestinationShowcase} from "./tourism/DestinationShowcase";
import {TourismFinalCTA} from "./tourism/TourismFinalCTA";
import {TourismHero} from "./tourism/TourismHero";

export function TourismPage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.tourismVisual;
 const narrative=dictionary.industryNarrative.tourism;
 return <div className="industry tourism"><TourismHero d={d} visual={visual} locale={locale}/><Problems d={d} className="tourism-problems"/><WebsiteWhy narrative={narrative} common={dictionary.common}/><DestinationShowcase visual={visual}/><BookingJourney visual={visual}/><BusinessBenefits d={d} narrative={narrative} common={dictionary.common}/><FeatureOutcomes d={d} narrative={narrative} common={dictionary.common}/><AiTripPlanner visual={visual}/><BookingExperience visual={visual}/><CompetitiveAdvantage narrative={narrative} common={dictionary.common}/><BeforeAfter d={d} common={dictionary.common}/><NextHubApproach d={d} common={dictionary.common}/><FAQ d={d}/><TourismFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
