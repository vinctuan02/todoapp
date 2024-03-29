import connectDB from './config/connectDB'
import bodyParser from "body-parser"
import express from 'express'
import cors from 'cors'
import initRouter from './route/web'
import viewEngine from './config/viewEngine'

// require('dotenv').config()
// console.log(process.env)

let app = express()

app.use((req, res, next) => {
    console.log('Received request:', req.method, req.url);
    next();
});

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB()
initRouter(app)
viewEngine(app)

let port = 8080

app.listen(port, () => {
    console.log("Backend nodejs is running: ", port)
})