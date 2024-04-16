import express, { Request, Response } from "express"
import cors from "cors"
import { addUser, deleteUser, getAllUsers, getUser, updateUser } from "./src/main"
const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/users", async (req: Request, res: Response) => {
  const data = {
    data: await getAllUsers()
  }
  res.json(data)
})

app.get("/api/user/:id", async (req: Request, res: Response) => {
  const data = {
    data: await getUser(req.params.id)
  }

  res.json(data)
})

app.post("/api/user", async (req: Request, res: Response) => {
  const data = {
    data: await addUser(req.body)
  }
  res.json(data)

})

app.put("/api/user/:id", async (req: Request, res: Response) => {
  const data = {
    data: await updateUser(req.body, req.params.id)
  }

  res.json(data)
})

app.delete("/api/user/:id", async (req: Request, res: Response) => {
  await deleteUser(req.params.id)
  res.json({
    message: "delete sucess"
  })
})

app.listen(3000, () => console.log("listening on port 3000"))
