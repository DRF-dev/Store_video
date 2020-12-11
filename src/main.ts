import express, { Request, Response } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send("Hello world !!!")
})

app.listen(4000, () => console.log("Server on port 4000"))