import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/i18n.config";
export function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    const locales = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
  }