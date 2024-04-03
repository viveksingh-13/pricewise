
import axios from "axios";
import * as cheerio from 'cheerio'; 
import { extractPrice } from "../utils";

export  async function scrapeAmazonProduct(url:string){
    if(!url)return;
  
    const username = String(process.env.NEXT_PUBLIC_DATA_USERNAME);
    const password = String(process.env.NEXT_PUBLIC_DATA_PASSWORD);
    const port=22225;
    const session_id = (1000000 * Math.random()) | 0;
    
    const options={
        auth:{
            username:`${username}-session-${session_id}`,
            password,
        },
        host:'brd.superproxy.io',
        port,
        rejectUnauthorized:false,
     
    }

   
    try{
console.log("gggggggggg");

         const response = await axios.get(url,options);
        const $ = cheerio.load(response.data);

const title = $('#productTitle').text().trim();

const price = extractPrice(
    $('.a-price-whole'),
)

console.log("title----->",title)
console.log("price----->",price)
    }catch(e:any){
        throw new Error(`failed ti get productt beacyesee ${e.message}`)
    }

}