// import { useState } from "react";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
// import { setlogInFlag } from "../redux/logInSlice";
// import { useDispatch } from "react-redux";

// interface FormValues {
//   email: string;
//   password: string;
// }

// const Login = () => {
//   const [formValues, setFormValues] = useState<FormValues>({
//     email: "",
//     password: ""
//   });
//   const dispatch = useDispatch();

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormValues({
//       ...formValues,
//       [name]: value
//     });
//   };
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: formValues,
//     onSubmit: (values: FormValues) => {
//       dispatch(setlogInFlag(true));
//       navigate("/home");
//       alert("You have Success!");
//       navigate("/about");
//       navigate("/contact");
//     },
//     validate: (values: FormValues) => {
//       const errors: { [key: string]: string } = {};
//       if (!values.email) {
//         errors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//         errors.email = "Invalid email address";
//       }
//       if (!values.password) {
//         errors.password = "Password is required";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters long";
//       }
//       return errors;
//     }
//   });

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className="w-2/4 " onSubmit={formik.handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//           />
//           {formik.errors.email && (
//             <div className="error">{formik.errors.email}</div>
//           )}
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//           />
//           {formik.errors.password && (
//             <div className="error">{formik.errors.password}</div>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { setlogInFlag } from "../redux/logInSlice";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography } from "@mui/material";
import React from "react";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: (values: FormValues) => {
      dispatch(setlogInFlag(true));
      navigate("/home");
      alert("You have Success!");
      navigate("/about");
      navigate("/contact");
    },
    validate: (values: FormValues) => {
      const errors: { [key: string]: string } = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    }
  });

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden"
    style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/online-shopping-shopping-cart-placed-alongside-notebook-blue_1150-19158.jpg?w=1060&t=st=1679602603~exp=1679603203~hmac=fd9a1d0c99ef78f2189a658d9ff0a3d5bab491b0412270d5232fef83e989cd9c')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>

    {/* <div className="flex items-center justify-center h-screen"> */}
      <form className="w-2/4 " onSubmit={formik.handleSubmit}>
        <div>
          <Typography>Email:</Typography>
          <TextField
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <Typography>Password:</Typography>
          <TextField
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          {formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;

