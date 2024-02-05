import { LinkContent } from "@/components/link-content"
import { Sidebar } from "@/components/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import getNavLinks from "./links"

export const revalidate = 24 * 60 * 60

export default async function IndexPage() {
  const navResources = await getNavLinks()
  const navItems = navResources.map(
    (n: { title: any; icon: any; id: any; key: any }) => {
      return {
        title: n.title,
        icon: n.icon,
        id: n.id,
        key: n.key,
      }
    }
  )
  return (
    <div className="container relative w-full min-h-screen px-0 mx-auto">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
          <Sidebar navItems={navItems} />
        </div>
        <div className="sm:pl-[16rem]">
          {/* @ts-expect-error Async Server Component */}
          <SiteHeader navItems={navItems} />
          <LinkContent navResources={navResources} />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
