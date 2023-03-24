// import { Route, Routes, Navigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";

// const ProtectedRoute = ({children}) => {
//   const isLoggedIn = useSelector((state) => state.signin.logInFlag);
//   const dispatch = useDispatch();
//   console.log(isLoggedIn, "iiiiiiiiiiiiiiiiii")
 
//   return isLoggedIn ? (
//     children
//   ) : (
//     <Navigate to="/login" />
//   );
// };
// export default ProtectedRoute;

// import { Route, Routes, Navigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// import { Interface } from "readline";
// Interface ProtectForm{
//     children : React.ReactNode   
// }

// const ProtectedRoute = ({children}: ProtectForm) => {
// const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
// const dispatch = useDispatch();
// console.log(isLoggedIn, "iiiiiiiiiiiiiiiiii")

// return isLoggedIn ? (
// children
// ) : (
// <Navigate to="/login" />
// );
// };

// export default ProtectedRoute;

import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setlogInFlag } from "../redux/logInSlice";
import { RootState } from "../redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
  const dispatch = useDispatch();
  console.log(isLoggedIn, "iiiiiiiiiiiiiiiiii");

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;

