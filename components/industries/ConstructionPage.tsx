import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {Problems,Features,Results,Journey,Ai,Process,FAQ,FinalCTA} from "./IndustryBlocks";
import {ConstructionHero} from "./construction/ConstructionHero";
import {PropertyGallery} from "./construction/PropertyGallery";
import {BuildingSelectorPreview} from "./construction/BuildingSelectorPreview";
import {PremiumProjectShowcase} from "./construction/PremiumProjectShowcase";
import {MobileExperiencePreview} from "./construction/MobileExperiencePreview";

export function ConstructionPage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.constructionVisual;
 return <div className="industry construction">
  <ConstructionHero d={d} visual={visual} locale={locale}/>
  <Problems d={d}/>
  <PropertyGallery d={d} visual={visual}/>
  <Features d={d}/>
  <BuildingSelectorPreview visual={visual}/>
  <Journey d={d}/>
  <MobileExperiencePreview visual={visual}/>
  <Results d={d} label={dictionary.common.results}/>
  <PremiumProjectShowcase visual={visual}/>
  <Ai d={d}/>
  <Process d={d} label={dictionary.common.work}/>
  <FAQ d={d}/>
  <FinalCTA d={d} locale={locale} slug="construction"/>
 </div>
}
