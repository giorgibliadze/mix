import {getDictionary,type IndustryCopy,type Locale} from "@/lib/i18n";
import {Problems,Journey,Ai,FAQ,FinalCTA} from "./IndustryBlocks";
import {BeforeAfter,BusinessBenefits,CompetitiveAdvantage,FeatureOutcomes,NextHubApproach,WebsiteWhy} from "./IndustryNarrativeSections";
import {ConstructionHero} from "./construction/ConstructionHero";
import {PropertyGallery} from "./construction/PropertyGallery";
import {BuildingSelectorPreview} from "./construction/BuildingSelectorPreview";
import {PremiumProjectShowcase} from "./construction/PremiumProjectShowcase";
import {MobileExperiencePreview} from "./construction/MobileExperiencePreview";

export function ConstructionPage({d,locale}:{d:IndustryCopy;locale:Locale}){
 const dictionary=getDictionary(locale);
 const visual=dictionary.constructionVisual;
 const narrative=dictionary.industryNarrative.construction;
 return <div className="industry construction">
  <ConstructionHero d={d} visual={visual} locale={locale}/>
  <Problems d={d}/>
  <WebsiteWhy narrative={narrative} common={dictionary.common}/>
  <PropertyGallery d={d} visual={visual}/>
  <BuildingSelectorPreview visual={visual}/>
  <Journey d={d}/>
  <BusinessBenefits d={d} narrative={narrative} common={dictionary.common}/>
  <FeatureOutcomes d={d} narrative={narrative} common={dictionary.common}/>
  <MobileExperiencePreview visual={visual}/>
  <CompetitiveAdvantage narrative={narrative} common={dictionary.common}/>
  <BeforeAfter d={d} common={dictionary.common}/>
  <PremiumProjectShowcase visual={visual}/>
  <Ai d={d}/>
  <NextHubApproach d={d} common={dictionary.common}/>
  <FAQ d={d}/>
  <FinalCTA d={d} locale={locale} slug="construction"/>
 </div>
}
