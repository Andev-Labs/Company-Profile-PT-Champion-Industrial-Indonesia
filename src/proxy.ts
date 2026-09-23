import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Everything except API routes, Next internals and files with an extension
  // (`favicon.ico`, `/images/*`), which have no locale to negotiate.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
