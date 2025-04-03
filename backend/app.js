import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/userRoute.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())





app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use("/api/v1/users", userRouter);

export default app;