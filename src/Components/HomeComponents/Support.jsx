import phone from "../../assets/icons/supprot/phone.png";
import calender from "../../assets/icons/supprot/calender.png";
import location from "../../assets/icons/supprot/location.png";

const Support = () => {
  return (
    <div className="bg-black rounded-xl flex justify-around p-5 py-24 mb-12">
      <div className="flex items-center gap-3">
        <div>
          <img className="w-10" src={calender} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">
            We are open monday-friday
          </h1>
          <h2 className="text-2xl font-bold text-white">7:00 am - 9:00 pm </h2>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img className="w-10" src={phone} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">Have a question?</h1>
          <h2 className="text-2xl font-bold text-white">+2546 251 2658 </h2>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <img className="w-10" src={location} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">
            Need a repair? our address
          </h1>
          <h2 className="text-2xl font-bold text-white">
            Liza Street, New York
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Support;
