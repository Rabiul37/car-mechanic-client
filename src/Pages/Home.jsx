import AboutUs from "../Components/HomeComponents/AboutUs";
import Banner from "../Components/HomeComponents/Banner";
import Navber from "../Components/HomeComponents/Navber";
import OurService from "../Components/HomeComponents/OurService";
import Products from "../Components/HomeComponents/Products";
import Support from "../Components/HomeComponents/Support";
import Team from "../Components/HomeComponents/Team";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <OurService></OurService>
      <Support></Support>
      <Products></Products>
      <Team></Team>
    </div>
  );
};

export default Home;
