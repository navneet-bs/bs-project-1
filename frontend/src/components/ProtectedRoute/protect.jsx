import { AuthContext } from "../../main";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);


  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  
  return children;
};

export default Protect;
