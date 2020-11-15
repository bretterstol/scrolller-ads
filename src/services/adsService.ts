import { ObjectId } from "mongodb";
import Ad, {MongoAd} from "../models/Ad";
import {addId} from "../utils";
import {getCollection} from "./mongoDB";
import {error404} from "../models/Error";

const collectionName = "ads"

export async function insertAd(ad: Ad){
    try {
        const doc: MongoAd = addId(ad)
        const collection = await getCollection<MongoAd>(collectionName)
        return collection?.insertOne(doc)
    }catch (e){
        return {
            ...error404,
            message: JSON.stringify(e)
        }
    }
}

export async function getAllAds(){
    try {
        const collection = await getCollection<MongoAd>(collectionName)
        return collection?.find({})
    }catch (e){
        return {
            ...error404,
            message: JSON.stringify(e)
        }
    }
}

export async function getAdById(id: string){
    try {
        const objId = new ObjectId(id)
        const col = await getCollection<MongoAd>(collectionName)
        return col?.findOne({
            _id: objId
        })
    }catch (e){
        return {
            ...error404,
            message: JSON.stringify(e)
        }
    }
}