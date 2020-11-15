import express from 'express';
import * as bodyParser from "body-parser";
import {insertAd} from "./controllers/insertAd";
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./swagger.json"

const app = express();


app.use(bodyParser.json())
app.use("/test", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get("/test", (req, res) => res.send({
    status: 200
}))

app.get("/", (req, res) => {
    res.send("Hei")
})

app.post("/", insertAd)

app.listen(8080, () => console.log("running"))