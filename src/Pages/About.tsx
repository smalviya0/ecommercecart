// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { fetchPostsSuccess } from "../redux/DemoSlice";
// import { fetchPosts } from "../redux/DemoThunk";
// import { Grid, Typography, Paper, Button } from "@mui/material";
// import { AppDispatch } from "../redux/store";

// export default function CardComponent() {
//   const dispatch: AppDispatch = useDispatch(); // use AppDispatch type here
//   const { posts, isLoading, error } = useSelector((state: any) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts())
//       .unwrap()
//       .then((originalPromiseResult) => {
//         dispatch(fetchPostsSuccess(originalPromiseResult));
//       })
//       .catch((rejectedValueOrSerializedError) => {
//         console.log(
//           "rejectedValueOrSerializedError",
//           rejectedValueOrSerializedError
//         );
//       });
//   }, [dispatch]);

//    if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Grid container spacing={2}>
//       {posts?.map((item: any) => (
//         <Grid item xs={12} md={6} lg={3} key={item.id}>
//           <Paper elevation={3}>
//             <div className="p-4">
//               <Typography variant="h5" component="h2" className="text-blue-600">
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 component="p"
//                 className="mb-2 leading-normal"
//               >
//                 {item.body}
//               </Typography>
             
//                {/* <Link to="/">
//               <img
//                 className="h-16 w-16 float-right mr-8"
//                 src={logoimg}
//                 alt="Logo"
//               />
//             </Link> */}
//               <div className="flex items-center">
//                 <img src={item.image} className="h-28 w-28" />
//                  <Button
//                 variant="contained"
//                 color="secondary"
//                 className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
//                 // className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow"
//               >
//                 Add to Cart
//               </Button>
//                 <Button
//                   component={Link}
//                   to={`/post/${item.id}`}
//                   state={{post: item}}
//                   variant="contained"
//                   color="primary"
//                   style={{marginTop: "60px", marginLeft: "15px"}}
//                   className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
//                 >
//                   Read more
//                 </Button>
//               </div>
//             </div>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostsSuccess } from "../redux/DemoSlice";
import { fetchPosts } from "../redux/DemoThunk";
import { Grid, Typography, Paper, Button } from "@mui/material";
import { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";



export default function CardComponent() {
  const dispatch: AppDispatch = useDispatch(); // use AppDispatch type here
  const { posts, isLoading, error } = useSelector((state: any) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts())
      .unwrap()
      .then((originalPromiseResult) => {
        dispatch(fetchPostsSuccess(originalPromiseResult));
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(
          "rejectedValueOrSerializedError",
          rejectedValueOrSerializedError
        );
      });
  }, [dispatch]);

  const navigate = useNavigate();
  const handleAddToCart = () => {
    // dispatch(addToCart(item)); // Add the item to the cart
    navigate("/Cart"); // Navigate to the Cart component
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Grid container spacing={2}>
      {posts?.map((item: any) => (
        <Grid item xs={12} md={6} lg={3} key={item.id}>
          <Paper elevation={3}>
            <div className="p-4">
              <Typography variant="h5" component="h2" className="text-blue-600">
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="mb-2 leading-normal"
              >
                {item.body}
              </Typography>

              <div className="flex items-center">
                <img src={item.image} className="h-28 w-28" />
                <Button
                  onClick={handleAddToCart} // Call the handleAddToCart function when the button is clicked
                  variant="contained"
                  color="secondary"
                  className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
                >
                  Add to Cart
                </Button>
                

                <Button
                  component={Link}
                  to={`/post/${item.id}`}
                  state={{ post: item }}
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "60px", marginLeft: "15px" }}
                  className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
                >
                  Read more
                </Button>
              </div>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { fetchPostsSuccess } from "../redux/DemoSlice";
// import { fetchPosts } from "../redux/DemoThunk";
// import { Grid, Typography, Paper, Button } from "@mui/material";
// import { AppDispatch } from "../redux/store";
// import { addToCart } from "../redux/cartSlice";
// import Product from "../Components/Product";

// export default function CardComponent() {
//   const dispatch: AppDispatch = useDispatch();

//   const { posts, isLoading, error } = useSelector((state: any) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts())
//       .unwrap()
//       .then((originalPromiseResult) => {
//         dispatch(fetchPostsSuccess(originalPromiseResult));
//       })
//       .catch((rejectedValueOrSerializedError) => {
//         console.log(
//           "rejectedValueOrSerializedError",
//           rejectedValueOrSerializedError
//         );
//       });
//   }, [dispatch]);

//   const navigate = useNavigate();

//   const handleAddToCart = (product: any) => {
//     dispatch(addToCart({ product }));
//     navigate("/Cart");
//   };

//   if (isLoading) {
//     return <div>Loading..
      
//       .</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Grid container spacing={2}>
//       {posts?.map((item: any) => (
//         <Grid item xs={12} md={6} lg={3} key={item.id}>
//           <Paper elevation={3}>
//             <div className="p-4">
//               <Typography variant="h5" component="h2" className="text-blue-600">
//                 {item.title}
//               </Typography>
//               <Typography
//                 variant="body1"
//                 component="p"
//                 className="mb-2 leading-normal"
//               >
//                 {item.body}
//               </Typography>

//               <div className="flex items-center">
//                 <img src={item.image} className="h-28 w-28" />
//                 <Product product={item} onAddToCart={handleAddToCart} />
//                 <Button
//                   component={Link}
//                   to={`/post/${item.id}`}
//                   state={{ post: item }}
//                   variant="contained"
//                   color="primary"
//                   style={{ marginTop: "60px", marginLeft: "15px" }}
//                   className="px-1 text-sm text-blue-100 bg-blue-500 rounded shadow h-10"
//                 >
//                   Read more
//                 </Button>
//               </div>
//             </div>
//           </Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
