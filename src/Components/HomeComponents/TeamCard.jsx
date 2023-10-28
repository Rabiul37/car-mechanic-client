import PropTypes from "prop-types";
import { BsFacebook } from "react-icons/Bs";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { FaInstagramSquare } from "react-icons/Fa";
import { AiFillLinkedin } from "react-icons/Ai";

const TeamCard = ({ team }) => {
  const { img, profession, expart } = team;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="">
          <img src={img} alt="Shoes" className=" w-11/12 h-56 m-auto" />
        </div>
        <div>
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">{profession}</h2>
            <p className="text-xl font-bold text-[#FF3811]">{expart}</p>
          </div>
          <div className="flex gap-3 items-cener justify-center text-2xl mb-5  cursor-pointer">
            <span className="text-[#395185]">
              {" "}
              <BsFacebook></BsFacebook>
            </span>
            <span className="text-[#55acee]">
              {" "}
              <AiFillTwitterCircle></AiFillTwitterCircle>
            </span>
            <span className="text-[#0a66c2]">
              {" "}
              <AiFillLinkedin></AiFillLinkedin>
            </span>
            <span className="text-[#ee4365]">
              {" "}
              <FaInstagramSquare></FaInstagramSquare>
            </span>
          </div>
        </div>
      </div>
      div
    </>
  );
};

export default TeamCard;
TeamCard.propTypes = {
  team: PropTypes.object,
};
