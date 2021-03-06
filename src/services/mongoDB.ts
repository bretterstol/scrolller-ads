import {MongoClient} from "mongodb"
import {error500} from "../models/Error";

let client: MongoClient | null = null

const databaseName = "scrolller-ads"

const connectionString = "mongodb://test:test@localhost:27017/?poolSize=20"

export async function connectToMongoDB(){
    client = new MongoClient(connectionString)
    await client.connect()
}

async function getClient(){
    if(!client) await connectToMongoDB()
    return client
}

export async function getCollection<A>(collectionName: string){
    const client = await getClient()
    const db = client?.db(databaseName)
    return db?.collection<A>(collectionName) || error500
}

export function closeMongoDBConnection(){
    client?.close()
}
