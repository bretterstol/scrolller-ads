import {Request, Response} from "express";
import {getClient} from "../services/mongoDB";
import Ad, {MongoAd} from "../models/Ad";
import {addId} from "../utils";

export async function insertAd(req: Request, res: Response) {
    const {body} = req
    const dbclient = await getClient<MongoAd>("ads")
    const document: MongoAd = addId(body as Ad)
    const result =  await dbclient?.insertOne(document)
    res.send(result)
}
