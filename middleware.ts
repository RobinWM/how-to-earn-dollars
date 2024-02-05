import { defaultLocale, locales } from "@/config"
import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales,
  defaultLocale,
  // 默认语言不重定向
  localePrefix: "as-needed",
})

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
