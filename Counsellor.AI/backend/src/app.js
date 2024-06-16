import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"
import "dotenv/config"

const app = express();
app.use(cors({
    origin: ["https://counsellor-ai.vercel.app"],
    methods:["POST","GET"],
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'


//declaration
app.use("/api/v1/users", userRouter)

export { app }
