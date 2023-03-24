// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Navbar1 from "./Components/Navbar1";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import ProtectedRoute from "./Components/ProtectedRoute.jsx";

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // perform logout logic here
//     setLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       {/* <Navbar1 loggedIn={loggedIn} handleLogout={handleLogout} /> */}
//       {/* <Navbar1 /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/about"
//           element={
//             // <ProtectedRoute>
//               <About />
//             // </ProtectedRoute>
//           }
//         />
//         <Route path="/contact" element={<Contact />} />

//         {/* <ProtectedRoute path="/about" element={<About />} />
//             <ProtectedRoute path="/contact" element={<Contact/>} /> */}

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import { BrowserRouter } from 'react-router-dom';

// const App = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   return (
//     <>
//       {mounted && (
//        <BrowserRouter>
//               <Routes>
//                <Route path="/" element={<Home />} />

//                <Route path="/contact" element={<Contact />} />

//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//               </Routes>
//             </BrowserRouter>
//       )}
//     </>
//   );
// };
// export default App;

// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import { BrowserRouter } from 'react-router-dom';
// import Navbar1 from "./Components/Navbar1";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";


// const App: React.FC = () => {
//   const [loggedIn, setLoggedIn] = useState<boolean>(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     // perform logout logic here
//   };

//   return (
//     <BrowserRouter>
//      <Navbar1 loggedIn={loggedIn} handleLogout={handleLogout} />
//      {/* <Navbar1 /> */}
//      <Routes>
//        <Route path="/" element={<Home />} />

//         <Route
//           path="/about"
//           element={
//              <ProtectedRoute>
//               <About />
//              </ProtectedRoute>
//           }
//         />
//         <Route path="/contact" element={<Contact />} />

//         {/* <ProtectedRoute path="/about" element={<About />} />
//             <ProtectedRoute path="/contact" element={<Contact/>} /> */}

//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/About";
import { BrowserRouter } from 'react-router-dom';
import Navbar1 from "./Layout/Navbar1";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import CardComponent from "./Components/CardComponent";
import PostDetails from "./Components/PostDetails";
import Cart from "./Components/Cart";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean >(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // perform logout logic here
  };

  return (
    <BrowserRouter>
      <Navbar1 loggedIn={loggedIn} handleLogout={handleLogout} />
      {/* <Navbar1 /> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-to-cart" element={<Cart />} /> 

        {/* <ProtectedRoute path="/about" element={<About />} />
            <ProtectedRoute path="/contact" element={<Contact/>} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<CardComponent />} />
        <Route path="/post/:id" element={<PostDetails />} />
        {/* <Route path="/add-to-cart" element={<Cart />} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

