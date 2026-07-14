import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {FAQ,Problems,Results} from "./IndustryBlocks";
import {AiTripPlanner} from "./tourism/AiTripPlanner";
import {BookingExperience} from "./tourism/BookingExperience";
import {BookingJourney} from "./tourism/BookingJourney";
import {DestinationShowcase} from "./tourism/DestinationShowcase";
import {TourismFinalCTA} from "./tourism/TourismFinalCTA";
import {TourismHero} from "./tourism/TourismHero";

export function TourismPage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.tourismVisual;
 return <div className="industry tourism"><TourismHero d={d} visual={visual} locale={locale}/><Problems d={d} className="tourism-problems"/><DestinationShowcase visual={visual}/><BookingJourney visual={visual}/><AiTripPlanner visual={visual}/><BookingExperience visual={visual}/><Results d={d} label={dictionary.common.results}/><FAQ d={d}/><TourismFinalCTA d={d} visual={visual} locale={locale}/></div>;
}
