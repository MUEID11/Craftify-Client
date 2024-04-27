import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return(
        <div className="relative h-[65vh] flex items-center justify-center">
      <span className="text-purple-600 loading loading-infinity absolute top-50 translate-y-5 loading-lg"></span>
    </div>
    )
  }
  if(user){
    return children;
  }else{
    <Navigate state={location.pathname} to="/login"/>
  }
};

export default PrivateRoute;
