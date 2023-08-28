import React from 'react'
import CardImage from './CardImage'

function InstagramImage({instagramImages}) {
  return (
    <>
{
    instagramImages.map((item,index)=>(
    <div class="col-md-3 col-lg-2 col-4">
   <CardImage instagramImage={item.pr_img.asset.url} />
</div>
   ))
}
</>
  )
}

export default InstagramImage