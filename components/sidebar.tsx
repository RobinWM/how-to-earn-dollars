/* eslint-disable @next/next/no-img-element */
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Category } from "@prisma/client"

import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
  navItems: Pick<Category, "title" | "icon" | "id" | "key">[]
  lng?: "zh" | "en"
}

export function Sidebar({ className, navItems }: SidebarProps) {
  const [activeTabId, setActiveTabId] = useState(
    navItems.length > 0 ? navItems[0].key : ""
  )

  useEffect(() => {
    const ele = document.getElementById(activeTabId)
    const elePosition = ele?.getBoundingClientRect().top || 0
    const offsetPosition = elePosition + window.pageYOffset - 75
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [activeTabId])

  useEffect(() => {
    let hash = ""

    if (typeof window !== "undefined") {
      hash = window.location.hash
    }

    const key = hash ? hash.slice(1) : ""
    key && setActiveTabId(key)
  }, [])

  return (
    <nav className="after:h-[calc(100vh - 65px)] block min-h-screen w-60 flex-row flex-nowrap font-semibold bg-background sm:px-6 sm:pb-6">
      <a
        href=""
        className="flex-col items-center justify-center hidden h-16 mx-6 sm:flex"
      >
        <Image
          src="/logo.png"
          alt=""
          className="h-auto"
          width={100}
          height={100}
        />
      </a>

      <div className="relative z-40 flex flex-col flex-1 w-full h-auto pt-4 overflow-x-hidden overflow-y-auto rounded opacity-100 flex-start">
        <div className="flex flex-col list-none md:min-w-full md:flex-col">
          <div className={cn("flex-none pb-12", className)}>
            <div className="pb-4 space-y-4">
              <div className="py-2">
                <div className="space-y-1">
                  {navItems.map((category) => {
                    return (
                      <div
                        className={`block cursor-pointer rounded-lg hover:bg-gray-100 hover:text-purple-500 ${
                          activeTabId === category.key
                            ? "bg-gray-100 text-purple-500"
                            : "text-primary"
                        }`}
                        key={category.key}
                        onClick={() => {
                          setActiveTabId(category.key)
                          window.location.hash = category.key
                        }}
                      >
                        <div className="scale relative mb-2 flex items-center gap-2 rounded-r-lg p-2 transition-colors ease-in-out before:transition-colors hover:no-underline sm:border-l-0 sm:pl-6 sm:before:absolute sm:before:left-[-5px] sm:before:top-[2px] sm:before:h-[calc(100%-4px)] sm:before:w-[10px] sm:before:rounded-full sm:before:transition-colors">
                          <div className="relative flex shrink-0">
                            <img
                              src={category.icon}
                              alt=""
                              className="block"
                              width={20}
                              height={20}
                            />
                          </div>
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                            {category.title}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
