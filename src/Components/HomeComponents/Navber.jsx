import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthProvider";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.massage);
      });
  };
  const navber = (
    <>
      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/service"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          Service
        </NavLink>
      </li>
      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/content"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          Content
        </NavLink>
      </li>

      <li className="hover:underline  hover:decoration-[#FF3811] decoration-4 underline-offset-1">
        <NavLink
          to="/Mybooking"
          className={({ isActive, isPending }) =>
            isActive
              ? "underline decoration-[#FF3811] decoration-4 underline-offset-1 text-[#FF3811] "
              : isPending
              ? "pending"
              : ""
          }
        >
          My booking
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>
          <img className="w-16" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 text-xl font-semibold  menu-horizontal px-1">
            {navber}
          </ul>
        </div>
        <div className="navbar-end">
          <h1>{user?.email}</h1>
          <Link to="/signin">
            <button
              onClick={handleLogout}
              className="border-2 border-[#FF3811]  px-6 py-1 text-[#FF3811] text-xl font-semibold hover:bg-[#FF3811] hover:text-white rounded-md "
            >
              {user ? "Log out" : "signin"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
