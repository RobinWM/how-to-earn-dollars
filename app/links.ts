import type { Prisma } from "@prisma/client"

import prisma from "@/lib/db"

import dataList from "./backupData"

export default async function getNavLinks() {
  const res = await prisma.category.findMany({
    where: {
      app_id: process.env.APP_ID,
      is_delete: 0,
    },
    orderBy: [
      {
        rank: "asc",
      },
    ],
    include: {
      links: {
        orderBy: {
          rank: "asc",
        },
        where: {
          public: true,
          status: 1,
        },
      },
    },
  })
  return res
}

export function setNavLink() {
  const allLinks = dataList.reduce((acc: any, item: any) => {
    acc = acc.concat(item.links)
    return acc
  }, [])
  allLinks.forEach(async (data: any) => {
    console.log("data", data)
    await prisma.link.create({ data })
  })
}

export function setCategory() {
  dataList.forEach(async (data: any) => {
    delete data.links
    await prisma.category.create({ data })
  })
}

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getNavLinks>
