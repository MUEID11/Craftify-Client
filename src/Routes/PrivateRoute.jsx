import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    // Show loading spinner if authentication data is still being fetched
    return (
      <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-info loading-md absolute top-50 translate-y-5"></span>
      </div>
    );
  }
  // If user is logged in, render the children component
  if (user) {
    return children;
  }

  // If user is not logged in, redirect to login page
  return <Navigate state={location.pathname} to="/login" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, 
};
export default PrivateRoute;
