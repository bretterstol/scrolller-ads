import {MongoClient, ObjectID} from "mongodb"
import {MongoDefaultSchema} from "../models/Default";

let client: MongoClient | null = null

const databaseName = "scrolller-ads"
const connectionString = "mongodb+srv://localhost:27017/?poolSize=20"

function setClient(){
    client = new MongoClient(connectionString)
}

export async function getClient<A>(collection: string){
    if(!client) setClient()
    await client?.connect()
    const database = client?.db(databaseName)
    return database?.collection<A>(collection)
}