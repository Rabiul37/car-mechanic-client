import AboutUs from "../Components/HomeComponents/AboutUs";
import Banner from "../Components/HomeComponents/Banner";
import Navber from "../Components/HomeComponents/Navber";
import OurService from "../Components/HomeComponents/OurService";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurService></OurService>
    </div>
  );
};

export default Home;
