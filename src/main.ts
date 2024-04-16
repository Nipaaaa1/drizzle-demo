import { db } from "./drizzle/db"

async function main() {
  const res = await db.query.UserTable.findMany()
  console.log(res)
}

main()
