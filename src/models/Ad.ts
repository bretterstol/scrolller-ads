import {MongoDefaultSchema} from "./Default";

export default interface Ad{
    siteName: string,
    brandLogoUrl: string,
    adUrl: string,
    buttonText: string,
    shortButtonText: string,
    url: string[],
    category: string[],
    mediaSources: MediaSource[]
}

interface MediaSource{
    url: string,
    width: number,
    height: number
}

export type MongoAd = Ad & MongoDefaultSchema