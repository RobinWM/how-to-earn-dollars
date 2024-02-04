"use client"

import { Category } from "@prisma/client"

import { Sidebar } from "./sidebar"

interface SidebarProps {
  className?: string
  navItems: Pick<Category, "title" | "icon" | "id" | "key">[]
  setShowMobileSidebar: Function
}

export function MobileSidebar({
  navItems,
  setShowMobileSidebar,
}: SidebarProps) {
  return (
    <>
      <div className="fixed inset-0 z-20 h-screen mx-0 w-60">
        <Sidebar navItems={navItems} />
      </div>
      <div
        className="fixed inset-0 z-10 w-full h-full bg-gray-900/50 dark:bg-gray-900/50"
        onClick={() => setShowMobileSidebar(false)}
      ></div>
    </>
  )
}
