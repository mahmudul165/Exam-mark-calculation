import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const myImage = "/nav-header.png";
//test
const HeaderHero = () => (
  <div
    className="px-1 py-5  "
    style={{
      backgroundImage: "url(https://i.ibb.co/Ph0fqtw/home-slide.jpg)",
      backgroundSize: "cover",
      opacity: 1,
      backgroundPosition: "center",
      //marginTop: "-80px",
       height: "80vh",
    }}
  >
    <div
      className="row    p-5 align-items-center "
      style={{ marginTop: "100px" }}
    >
      {/* <div className="col-md-6 col-xl-6 mb-4 mb-lg-0 ">
        <div className="lc-block position-relative ">
           

          <Image
            height={500}
            quality={75}
            src={myImage}
            className="ms-5  w-75 img-fluid rounded shadow "
            sizes="(max-width: 3840px) 100vw, 384px"
            width={384}
            alt="Photo by sultan tea"
          />
          
        </div>
      </div> */}
      {/* /col */}
      <div className="col-md-6 col-xl-6 ">
        <div className="lc-block mb-3 me-4">
          <div editable="rich">
            <h1 className="fw-bolder display-5  text-white ">
              Airport assistant and one stop service soluation 
            </h1>
          </div>
        </div>

        {/* /lc-block */}
        {/* <div className="lc-block mb-2">
          <div editable="rich">
            <p className="lead text-white pb-2">Tea is Good your health</p>
          </div>
        </div>
        <div className="lc-block mt-2">
          <Link href="/shop">
            <button
              className="d-flex align-items-center  fw-bolder btn  btn-lg text-white"
              style={{ backgroundColor: "#E49E48" }}
            >
              Shop Now
              <AiOutlineArrowRight className="ms-2" />
            </button>
          </Link>
        </div> */}
        {/* /lc-block */}
      </div>
      {/* /col */}
    </div>
  </div>
);

export default HeaderHero;
