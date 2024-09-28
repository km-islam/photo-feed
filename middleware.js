import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["bn", "en"];
let defaultLocale = "en";

const getLocale = (req) => {
  const acceptedLanguage = req.headers.get("Accept-Language") ?? undefined;
  let headers = { "accept-language": acceptedLanguage };
  let languages = new Negotiator({ headers }).languages();

  console.log(acceptedLanguage, headers, languages);

  return match(languages, locales, defaultLocale);
};

export const middleware = (req, res, next) => {
  const { pathname } = req.nextUrl;

  console.log("Path name from middleware:", pathname);

  const pathNameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathNameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
  }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next,assets,api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
