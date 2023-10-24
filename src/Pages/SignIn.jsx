import { Link } from "react-router-dom";
import Navber from "../Components/HomeComponents/Navber";
import login from "../assets/images/login/login.svg";
import { BsFacebook } from "react-icons/Bs";
import { BsLinkedin } from "react-icons/Bs";
import { FcGoogle } from "react-icons/Fc";
import { BsGithub } from "react-icons/Bs";

const SignIn = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="flex justify-between items-center  ">
        <div className="hidden lg:block">
          <img src={login} alt="" />
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="text-center ">
                  <h1 className="text-3xl font-bold">Sign in </h1>
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <button className="btn bg-[#FF3811] text-white">
                    Sign in
                  </button>
                </div>
              </form>
              <div className="text-center -mt-5">
                <span className="text-md text-gray-500 text-center mb-5">
                  or sign in with
                </span>
                <div className="flex gap-3 items-cener justify-center text-2xl mb-5 mt-5 cursor-pointer">
                  <BsFacebook></BsFacebook>
                  <BsLinkedin></BsLinkedin>
                  <FcGoogle></FcGoogle>
                  <BsGithub></BsGithub>
                </div>
                <h1 className="texxt-sm font-semibold mb-6">
                  Do not have account ?{" "}
                  <Link to="/SignUp" className="underline">
                    sign up
                  </Link>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
