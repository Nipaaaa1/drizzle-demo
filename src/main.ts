import { eq } from "drizzle-orm"
import { db } from "./drizzle/db"
import { UserTable } from "./drizzle/schema"

type userType = {
  name: string,
  age: number,
  email: string
}

type userUpdateType = {
  name?: string,
  age?: number,
  email?: string
}

export const getAllUsers = async () => {
  return await db.query.UserTable.findMany()
}

export const getUser = async (id: string) => {
  return await db.query.UserTable.findFirst({
    where: eq(UserTable.id, id)
  })
}

export const addUser = async (data: userType) => {
  return await db.insert(UserTable).values(data).returning({
    id: UserTable.id,
    name: UserTable.name,
    age: UserTable.age,
    email: UserTable.email
  })
}

export const updateUser = async (data: userUpdateType, id: string) => {
  return await db.update(UserTable).set(data).where(eq(UserTable.id, id)).returning({
    id: UserTable.id,
    name: UserTable.name,
    age: UserTable.age,
    email: UserTable.email
  })
}

export const deleteUser = async (id: string) => {
  await db.delete(UserTable).where(eq(UserTable.id, id))
}
