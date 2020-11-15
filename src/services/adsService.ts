import Ad, {MongoAd} from "../models/Ad";
import {addId} from "../utils";
import {getCollection} from "./mongoDB";

const collectionName = "ads"

export async function insertAd(ad: Ad){
    try {
        const doc: MongoAd = addId(ad)
        const collection = await getCollection<MongoAd>(collectionName)
        return collection?.insertOne(doc)
    }catch (e){
        console.log(e)
    }
}

export async function getAllAds(){
    try {
        const collection = await getCollection<MongoAd>(collectionName)
        return collection?.find({})
    }catch (e){
        console.log(e)
    }
}