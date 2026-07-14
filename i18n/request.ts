import {getRequestConfig} from "next-intl/server";
import {getDictionary,isLocale} from "@/lib/i18n";

export default getRequestConfig(async({requestLocale})=>{
 const requested=await requestLocale;
 const locale=requested&&isLocale(requested)?requested:"ka";
 return {locale,messages:getDictionary(locale)};
});
