import type { Prisma } from "@prisma/client"

import prisma from "@/lib/db"

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

export type CategoryWithLinks = Prisma.PromiseReturnType<typeof getNavLinks>
