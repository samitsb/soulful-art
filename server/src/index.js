import express from 'express'
import cors from 'cors'
import connect from './db/connect.js'
import UserRouter from './routes/user.js'
const port = 8080
const app = express()

connect()
app.use(cors())
app.use(express.json())
app.use(UserRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})