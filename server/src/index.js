import express from 'express'
import cors from 'cors'
import connect from './db/connect.js'
import UserRouter from './routes/user.js'
import dotnev from 'dotenv'
dotnev.config()

const port = process.env.PORT
const app = express()

connect()
app.use(cors())
app.use(express.json())
app.use(UserRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})