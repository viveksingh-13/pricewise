"use server"
import { scrapeAmazonProduct } from "../scraper";
console.log(process.env.DATA_USERNAME,"process.env.DATA_USERNAME")

export async function scrapeAndStoreAndProduct  (url:string){
    if(!url)return;

    try{
        console.log("sssssss");
        
          const scrapeProduct = await scrapeAmazonProduct(url)
    }catch(error:any){
        throw new Error(`failed to scrap Prodict ==> ${error.message}`)
    }

}