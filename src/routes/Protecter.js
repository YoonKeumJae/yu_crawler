import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const Protecter = ({ children }) => {
  const user = auth.currentUser;
  if (!user) return <Navigate to="/signin" />;
  return children;
};

export default Protecter;
