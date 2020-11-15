import {ObjectID} from "mongodb";
import {MongoDefaultSchema} from "./models/Default";
import {Error} from "./models/Error";


export function addId<A>(obj: A): A & MongoDefaultSchema {
    const _id = new ObjectID()
    return {
        ...obj,
        _id
    }
}

export function isError(type: any): type is Error{
    const obj = type as Error
    return obj._type === "Error" && !!obj.status && !!obj.statusCode
}