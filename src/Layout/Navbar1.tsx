// import { Link } from "react-router-dom";
// import logoimg from "../assests/images/logoimg.png";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// interface LogIn {
//   loggedIn: boolean;
//   handleLogout: () => void;
// }
// const Navbar1: React.FC<LogIn> = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
//   };

//   return (
//     <nav
//       className="flex justify-between items-center py-4"
//       style={{ backgroundColor: "black" }}
//     >
//       <Link to="/">
//         <img className="h-16 w-16 ml-8" src={logoimg} alt="Logo" />
//       </Link>
//       <div className="mr-4">
//         <Link className="px-4 py-2 text-white hover:bg-gray-200 rounded" to="/">
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               onClick={() => handleLogout()}
//             >
//               Logout
//             </button>
// import { Link } from "react-router-dom";
// import logoimg from "../assests/images/logoimg.png";
// import { useSelector, useDispatch } from "react-redux";
// import { setlogInFlag } from "../redux/logInSlice";
// import { RootState } from "../redux/store";
// interface LogIn {
//   loggedIn: boolean;
//   handleLogout: () => void;
// }

// const Navbar1: React.FC<LogIn> = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(setlogInFlag(false));
//   };

//   return (
//     <nav
//       className="flex justify-between items-center py-4"
//       style={{ backgroundColor: "black" }}
//     >
//       <div className="flex items-center">
//         {/* <Link to="/">
//           <img className="h-16 w-16 ml-8" src={logoimg} alt="Logo" />
//         </Link> */}
//         <h1 className="text-white ml-4 text-2xl font-bold">E-commerce</h1>
//       </div>
//       <div className="mr-4">
//         <Link className="px-4 py-2 text-white hover:bg-gray-200 rounded" to="/">
//           Home
//         </Link>
//         {isLoggedIn ? (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/about"
//             >
//               About
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/contact"
//             >
//               Contact
//             </Link>
//             <button
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               onClick={() => handleLogout()}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/login"
//             >
//               Login
//             </Link>
//             <Link
//               className="px-4 py-2 text-white hover:bg-gray-200 rounded"
//               to="/signup"
//             >
//               Sign up
//             </Link>
//             <Link to="/">
//               <img
//                 className="h-16 w-16 float-right mr-8"
//                 src={logoimg}
//                 alt="Logo"
//               />
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;
import { Link } from "react-router-dom";
import logoimg from "../assests/images/logoimg.png";
import { useSelector, useDispatch } from "react-redux";
import { setlogInFlag } from "../redux/logInSlice";
import { RootState } from "../redux/store";
import AddToCart from "../Components/Cart";

interface LogIn {
  loggedIn: boolean;
  handleLogout: () => void;
}

const Navbar1: React.FC<LogIn> = () => {
  const isLoggedIn = useSelector((state: RootState) => state.signin.logInFlag);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setlogInFlag(false));
  };


  
  return (
    <nav
      className="flex justify-between items-center py-2 sticky top-0 z-50"
      style={{backgroundColor: "black"}}
    >
      <div className="flex items-center">

        <h1 className="text-white ml-4 text-2xl font-bold">E-commerce</h1>
      </div>
      <div className="mr-4">
        <Link
          className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
          to="/"
        >
          Home
        </Link>
        {isLoggedIn ? (
          <>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/about"
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
              to="/contact"
            >
              Contact
            </Link>
            <button
              className="px-4 py-2 text-white hover:bg-gray-200 rounded  hover:text-black"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
             {/* <Link to="/">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link> */}
          </>
          
        ) : (
          <>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-4 py-2 text-white hover:bg-gray-200 rounded hover:text-black"
              to="/signup"
            >
              Sign up
            </Link>
            {/* <Link to="/">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link> */}
          </>
        )}
         <Link to="/add-to-cart">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link>
      </div>
    </nav>
  );
};

export default Navbar1;