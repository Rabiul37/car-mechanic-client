import { Link } from "react-router-dom";
import login from "../assets/images/login/login.svg";
import Navber from "../Components/HomeComponents/Navber";

const SignUp = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="flex justify-between items-center mt-12  ">
        <div className="hidden lg:block">
          <img src={login} alt="" />
        </div>
        <div className="hero">
          <div className="hero-content  flex-col ">
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="text-center ">
                  <h1 className="text-3xl font-bold">Sign Up </h1>
                </div>
                <div className=" lg:flex items-center gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User image</span>
                    </label>
                    <input
                      type="text"
                      name="imgURL"
                      placeholder="Your image Link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <label>
                  <input type="checkbox" name="checkbox" id="" />
                  <span className="text-sm font-semibold ml-2">
                    Agree with our term and condition
                  </span>
                </label>
                <div className="form-control mt-6">
                  <button className="btn bg-[#FF3811] text-white">
                    Sign Up
                  </button>
                </div>
                <h1 className="texxt-sm font-semibold">
                  Do not have account ?{" "}
                  <Link to="/Signin" className="underline">
                    Signin
                  </Link>{" "}
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
