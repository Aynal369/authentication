import { useContext } from "react";
import { authContext } from "../Authentication/AuthProvider";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
