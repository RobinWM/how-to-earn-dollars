import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { locales, siteConfig } from "@/config"
import { unstable_setRequestLocale } from "next-intl/server"
import PlausibleProvider from "next-plausible"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domainName}`),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  // alternates: {
  //   canonical: "/",
  // },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export function generateStaticParams() {
  return locales.map((lng) => ({ lng }))
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { lng: string }
}

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  unstable_setRequestLocale(lng)

  return (
    <>
      <html lang={lng} suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <PlausibleProvider domain={siteConfig.domainName} />
          <GoogleAnalytics />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <TailwindIndicator />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
