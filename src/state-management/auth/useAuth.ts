import { useContext } from "react";
import AuthContext from "../auth/authContext";

const useAuth = () => useContext(AuthContext);

export default useAuth;
