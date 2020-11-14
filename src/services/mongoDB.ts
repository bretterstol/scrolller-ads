import {MongoClient} from "mongodb"

let client: MongoClient = null

const databaseName = "ads"
const connectionString = "mongodb+srv://localhost:27017/?poolSize=20"

function setClient(){
    client = new MongoClient(connectionString)
}

export async function getClient<A>(collection: string){
    if(!client) setClient()
    await client.connect()
    const database = await client.db(databaseName)
    return database.collection<A>(collection)
}