import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const OurService = () => {
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const handleService = () => {};

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-xl font-bold text-[#FF3811]">Service</h1>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-base font-normal text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 mb-5">
        {showMore
          ? services
              .slice(0, 3)
              .map((service) => (
                <ServicesCard
                  key={service._id}
                  service={service}
                ></ServicesCard>
              ))
          : services.map((service) => (
              <ServicesCard key={service._id} service={service}></ServicesCard>
            ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleService(setShowMore(!showMore))}
          className="m-8  border-2 bg-[#FF3811]  px-6 py-1 text-white text-xl font-semibold hover:border-2 border-[#FF3811] hover:bg-white hover:text-black rounded-md "
        >
          {showMore ? "Show More Service" : "Show less"}
        </button>
      </div>
    </div>
  );
};

export default OurService;
