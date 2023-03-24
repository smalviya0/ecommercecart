// import React from "react";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";

// interface SignUpFormValues {
//   Name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const SignUp: React.FC = () => {
//   const formik = useFormik<SignUpFormValues>({
//     initialValues: {
//       Name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validate: (values) => {
//       const errors: Partial<SignUpFormValues> = {};

//       if (!values.Name) {
//         errors.Name = "Required";
//       }
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }

//       if (!values.password) {
//         errors.password = "Required";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters long";
//       }

//       if (!values.confirmPassword) {
//         errors.confirmPassword = "Required";
//       } else if (values.confirmPassword !== values.password) {
//         errors.confirmPassword = "Passwords must match";
//       }

//       return errors;
//     },
//     onSubmit: (values) => {
//       localStorage.setItem("values", JSON.stringify(values, null, 2));
//       alert("You have successfully registered");
//     },
//   });

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className="w-2/4" onSubmit={formik.handleSubmit}>
//         <label htmlFor="Name">Name</label>
//         <input
//           type="text"
//           id="Name"
//           name="Name"
//           value={formik.values.Name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {formik.touched.Name && formik.errors.Name ? (
//           <div>{formik.errors.Name}</div>
//         ) : null}

//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div>{formik.errors.email}</div>
//         ) : null}

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div>{formik.errors.password}</div>
//         ) : null}

//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formik.values.confirmPassword}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//           <div>{formik.errors.confirmPassword}</div>
//         ) : null}

//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           type="submit"
//         >
//           Submit
//         </button>
//         <Link
//           to="/login"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
//           type="login"
//         >
//           SignIn
//         </Link>
//       </form>
//     </div>
//   );
// };
// export default SignUp;
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";

interface SignUpFormValues {
  Name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      Name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors: Partial<SignUpFormValues> = {};

      if (!values.Name) {
        errors.Name = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords must match";
      }

      return errors;
    },
    onSubmit: (values) => {
      localStorage.setItem("values", JSON.stringify(values, null, 2));
      alert("You have successfully registered");
    },
  });

  return (
    <div className="flex items-center justify-center h-screen"
     style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1301022916/photo/online-shopping-concept-laptop-and-shopping-cart-on-blue-background.jpg?s=170667a&w=0&k=20&c=Rx0PmiogKaiDe92UykAe2ikMQSWqF6Ei6A167DK3DC0=')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <form className="w-2/4" onSubmit={formik.handleSubmit}>
        <div>
      <Typography>Name:</Typography>
        <TextField
          type="text"
          id="Name"
          name="Name"
          value={formik.values.Name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        {formik.touched.Name && formik.errors.Name ? (
          <div>{formik.errors.Name}</div>
        ) : null}
      </div>
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
        
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
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

        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        </div>
      <div>
         <Typography>Confirm Password:</Typography>

        <TextField
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
        </div>
        <Button
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          // type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit

          
        </Button>
        {/* <Button
          type="submit"
          variant="contained"
        color="primary"
          fullWidth
        >
          Submit
        </Button> */}
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline"
          type="login"
        >
          SignIn
        </Link>
      </form>
    </div>
  );
};
export default SignUp;
