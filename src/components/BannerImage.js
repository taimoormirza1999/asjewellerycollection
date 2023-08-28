import { Link } from "react-router-dom";
function BannerImage({image,text}) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 col-6 mx-auto c" data-aos="zoom-in">
    <Link to="productList.php?id=1">
      <div className="card card-border">
        <img src={image} height="590px" className="w-80 main-img card-img-top img-fluid img-responsive" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title text-center sub-heading" style={{ color: '#bbb572' }}>{text}</h5>
      </div>
    </Link>
  </div>
  )
}

export default BannerImage