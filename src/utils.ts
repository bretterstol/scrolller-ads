import {ObjectID} from "mongodb";


export function addId<A>(obj: A): A & {_id: ObjectID} {
    const _id = new ObjectID()
    return {
        ...obj,
        _id
    }
}