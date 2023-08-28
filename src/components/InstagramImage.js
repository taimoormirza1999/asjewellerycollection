import React from 'react'
import CardImage from './CardImage'

function InstagramImage({instagramImages}) {
//    var a=[1,2,3,4,5,,6,7,8,9,10,11,12];
  return (
    <>
{
    instagramImages.map((item,index)=>(
    <div class="col-md-2 col-4">
   <CardImage instagramImage={item.pr_img.asset.url} />
</div>
   ))
}
</>
  )
}

export default InstagramImage