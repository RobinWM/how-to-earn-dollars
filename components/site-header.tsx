import Link from "next/link"
import { siteConfig } from "@/config"

import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { SelectLanguageNav } from "./select-language-nav"
import { SidebarProps } from "./sidebar"
import { UserAccountNav } from "./user-account-nav"

export const dynamic = "force-static"

export async function SiteHeader({ navItems, lng }: SidebarProps) {
  const user = await getCurrentUser()
  return (
    <header className="sticky top-0 z-40 w-full bg-background dark:border-slate-50/[0.06] lg:border-b lg:border-slate-900/10">
      <div className="container flex items-center h-16 px-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} navItems={navItems} />
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
            <SelectLanguageNav lng={lng} />
            <ThemeToggle />
            {user ? (
              <UserAccountNav user={user} />
            ) : (
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
