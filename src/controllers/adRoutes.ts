import {Request, Response} from "express";
import Ad from "../models/Ad";
import {getAdById, getAllAds, insertAd} from "../services/adsService";
import {isError} from "../utils";

export async function postAd(req: Request, res: Response) {
    const {body} = req
    const ad = body as Ad
    const result = await insertAd(ad)
    console.log(result)
    res.json(result)
}
export async function getAd(req: Request, res: Response){
   const {adId} = req.params
    const result = await getAdById(adId)
    console.log(result)
    res.json(result)
}

export async function getAds(req: Request, res: Response){
    const cursorOrError = await getAllAds()
    if(isError(cursorOrError)) res.json(cursorOrError)
    else {
        const allDocs = await cursorOrError.toArray()
        res.json(allDocs)
    }
}

export async function putAd(req: Request, res: Response){
}

export async function deleteAd(req: Request, res: Response){

}