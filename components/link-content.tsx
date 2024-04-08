/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"
import Link from "next/link"
import { Link as SiteLink } from "@prisma/client"
import { useTranslations } from "next-intl"

import { CategoryWithLinks } from "@/app/links"

export function LinkItem({ link }: { link: SiteLink }) {
  return (
    <Link href={link.url} target="_blank">
      <div className="relative mb-6 flex min-h-[122px] min-w-0 cursor-pointer flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg  xl:mb-0">
        <div className="flex items-center">
          <div className="flex w-10 h-10 mr-3 overflow-hidden rounded-full">
            {link.icon ? (
              <img
                src={link.icon}
                className="object-fill"
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <span className="w-full h-full font-bold leading-10 text-center bg-purple-500 rounded-full">
                {link.title.slice(0, 1)}
              </span>
            )}
          </div>
          <span className="text-xl font-bold text-primary">{link.title}</span>
        </div>
        <div className="mt-2 text-sm line-clamp-2 text-primary">
          {link.description}
        </div>
      </div>
    </Link>
  )
}

export function LinkContent({
  navResources,
}: {
  navResources: CategoryWithLinks
}) {
  const t = useTranslations("nav")

  return (
    <div className="w-full pt-4">
      <div className="w-full px-4 mx-auto md:px-6">
        {navResources.map((category) => {
          return (
            <div id={category.key} key={category.id} className="mb-12">
              <div className="my-4">
                <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">
                  {t(category.key)}
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {category.links.map((link) => (
                  <LinkItem link={link} key={link.id} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
