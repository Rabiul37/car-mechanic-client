import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content gap-20 flex-col md:flex-col lg:flex-row">
        <div className="lg:relative w-5/6">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
          <img
            src={parts}
            className=" w-60 border-8 border-white max-w-sm rounded-lg shadow-2xl lg:absolute left-60 top-40"
          />
        </div>
        <div className="W-1/6">
          <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="border-2 bg-[#FF3811]  px-6 py-1 text-white text-xl font-semibold hover:border-2 border-[#FF3811] hover:bg-white hover:text-black rounded-md ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
