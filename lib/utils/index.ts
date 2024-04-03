export const extractPrice = (...elements:any) =>{
console.log("ekemtents usss ==>",elements)
    for (const elem of elements) {
        const priceText = elem.text().trim();
        console.log("price is ", priceText);

        if (priceText) {
            const price = parseFloat(priceText.replace(/[^0-9,]/g, ''));
            if (!isNaN(price)) {
                return price;
            }
        }
    }
    return '';
}