import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


// Private Routes allow for us to have protected routes behind such things as user login!
// 
const PrivateRoute = () => {
  const { user, loading } = useAuth();
    console.log("PrivateRoute USER:", user);


  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;