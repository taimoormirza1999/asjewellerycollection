import sanityClient from './sanity';
let sanityQuery = (query, params)=> sanityClient.fetch(query, params);


export const getCarouselImages = ()=>{
    return sanityQuery(`
    *[_type == 'carousel' && status == true] {
        carousel_img {
          asset-> {
            url
          }
        }
      }
    `);
}
export const getCategoryImages = ()=>{
    return sanityQuery(`
    *[_type == 'products'&& categoryImage == true]{
      pr_img{
              asset-> {
                url
              }
            }
    } `);}
export const getBestSeller = ()=>{
    return sanityQuery(`
    *[_type == 'products'&& bestsellerImage == true]{
      pr_name,
      pr_img{
              asset-> {
                url
              }
            }
    } 
     `);
}
export const getReadyToShip = ()=>{
    return sanityQuery(`
    *[_type == 'products'&& readyToShipImage == true]{
      pr_name,
      pr_img{
              asset-> {
                url
              }
            }
    } 
     
     `);}
export const getInstagramImages = ()=>{
    return sanityQuery(`
    *[_type == 'products'&& 
InstagramImage == true]{
      _id,
      pr_img{
              asset-> {
                url
              }
            }
    }`);
}

