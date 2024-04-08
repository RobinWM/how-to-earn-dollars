import { createClient } from "@libsql/client"
import { PrismaLibSQL } from "@prisma/adapter-libsql"
import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient
}

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

const adapter = new PrismaLibSQL(libsql)

const prisma = global.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma
