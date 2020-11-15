import {ObjectId} from "mongodb";
import Ad, {MongoAd} from "../models/Ad";
import {addId, isError} from "../utils";
import {getCollection} from "./mongoDB";
import {error404} from "../models/Error";

const collectionName = "ads"

export async function insertAd(ad: Ad) {
    const doc: MongoAd = addId(ad)
    const collectionOrError = await getCollection<MongoAd>(collectionName)
    if (isError(collectionOrError)) return collectionOrError;
    return collectionOrError.insertOne(doc)
}

export async function getAllAds() {
    const collectionOrError = await getCollection<MongoAd>(collectionName)
    if (isError(collectionOrError)) return collectionOrError;
    return collectionOrError.find({})
}

export async function getAdById(id: string) {
    const objId = new ObjectId(id)
    const collectionOrError = await getCollection<MongoAd>(collectionName)
    if(isError(collectionOrError)) return collectionOrError
    const result = await collectionOrError.findOne({
        _id: objId
    })
    return result || error404
}