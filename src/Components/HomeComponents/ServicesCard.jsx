import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/Bs";

const ServicesCard = ({ service }) => {
  console.log(service);
  const { img, price, title } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-60" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="card-actions flex justify-end"></div>
          <div className="flex justify-between items-center">
            {" "}
            <p className="text-xl font-bold text-[#FF3811]">
              Price : {price} $
            </p>
            <span className="text-3xl text-[#FF3811] font-bold">
              {" "}
              <BsArrowRight></BsArrowRight>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
ServicesCard.propTypes = {
  service: PropTypes.object,
};
