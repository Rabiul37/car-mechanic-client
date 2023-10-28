import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const BookingPrivate = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user?.email) {
    return children;
  }
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  return <Navigate to="/Signin" replace></Navigate>;
};

export default BookingPrivate;
BookingPrivate.propTypes = {
  children: PropTypes.node,
};
