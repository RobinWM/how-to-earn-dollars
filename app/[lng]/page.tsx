import { getTranslations } from "next-intl/server"

import { LinkContent } from "@/components/link-content"
import { Sidebar } from "@/components/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import getNavLinks from "../links"

export const revalidate = 24 * 60 * 60

interface lngProps {
  lng: "zh" | "en"
}

export default async function IndexPage({
  params: { lng },
}: {
  params: lngProps
}) {
  const t = await getTranslations("nav")

  console.log(new Date())

  const navResources = await getNavLinks()
  const navItems = navResources.map(
    (n: { title: any; icon: any; id: any; key: any }) => {
      return {
        title: t(n.key),
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
          <SiteHeader lng={lng} navItems={navItems} />
          <LinkContent navResources={navResources} />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
