import express from 'express';
import * as bodyParser from "body-parser";
import {getAd, getAds, postAd, putAd} from "./controllers/adRoutes";
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "./swagger.json"
import {closeMongoDBConnection, connectToMongoDB} from "./services/mongoDB";


connectToMongoDB()
    .then(() => console.log("Connected to mongo!"))
    .catch(e => console.log("Unable to connect to mongo! ", e))

function cleanUp(){
    closeMongoDBConnection()
    process.exit()
}
process.on('SIGINT', cleanUp);
process.on('SIGTERM', cleanUp);

const app = express();

app.use(bodyParser.json())
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.get("/test", (req, res) => res.send({
    status: 200
}))



app.post("/ads", postAd)
app.get("/ads", getAds)
app.get("/ads/:adId", getAd)
app.put("/ads/:adId", putAd)



app.listen(8081, () => console.log("running"))