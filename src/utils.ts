import {ObjectID} from "mongodb";
import {MongoDefaultSchema} from "./models/Default";


export function addId<A>(obj: A): A & MongoDefaultSchema {
    const _id = new ObjectID()
    return {
        ...obj,
        _id
    }
}