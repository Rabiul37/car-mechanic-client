import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-[80vh] rounded" />
          <div className="absolute    h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="flex flex-col gap-8 absolute top-20 left-16">
              <h1 className="text-6xl font-semibold text-white ml-8">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <h2 className="text-md font-semibold text-white ml-8">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </h2>
              <div className="ml-8">
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Discover More
                </button>
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide4"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle mr-3"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-[#FF3811] hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-[80vh] rounded" />
          <div className="absolute    h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="flex flex-col gap-8 absolute top-20 left-16">
              <h1 className="text-6xl font-semibold text-white ml-8">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <h2 className="text-md font-semibold text-white ml-8">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </h2>
              <div className="ml-8">
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Discover More
                </button>
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide1"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle mr-3"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-[80vh] rounded" />
          <div className="absolute    h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="flex flex-col gap-8 absolute top-20 left-16">
              <h1 className="text-6xl font-semibold text-white ml-8">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <h2 className="text-md font-semibold text-white ml-8">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </h2>
              <div className="ml-8">
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Discover More
                </button>
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide2"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle mr-3"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full h-[80vh] rounded" />
          <div className="absolute    h-full  w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="flex flex-col gap-8 absolute top-20 left-16">
              <h1 className="text-6xl font-semibold text-white ml-8">
                Affordable <br /> Price For Car <br /> Servicing
              </h1>
              <h2 className="text-md font-semibold text-white ml-8">
                There are many variations of passages of available, <br /> but
                the majority have suffered alteration in some form
              </h2>
              <div className="ml-8">
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Discover More
                </button>
                <button className="border-2 mr-5 border-white  px-6 py-1 text-white text-xl font-semibold hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811] rounded-md">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-2">
            <a
              href="#slide3"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle mr-3"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn hover:bg-[#FF3811] hover:text-white btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
