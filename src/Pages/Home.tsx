// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//       <p>Click on the links above to navigate to other pages.</p>
//     </div>
//   );
// };
// export default Home;
// import React from 'react';
// import { Container, Grid, Typography } from '@mui/material';

// const HomePage: React.FC = () => {
//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="h1" align="center">
//             My E-commerce Website
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h3" align="center">
//             Shop the Latest Products
//           </Typography>
//           <Typography variant="body1" align="center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet lacus ac dolor tincidunt lobortis.
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img src={"data:image/jpeg;base64,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"} alt="Latest products" width="100%" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <img src={"https://ocdn.eu/images/pulscms/ZjI7MDA_/bb6b0f53264a0ae1d90067153c065aeb.jpg"} alt="Featured products" width="100%" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h3" align="center">
//             Featured Products
//           </Typography>
//           <Typography variant="body1" align="center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet lacus ac dolor tincidunt lobortis.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default HomePage;
// // import React from 'react';
// // import { Container, Grid, Typography } from '@mui/material';
// // // import { makeStyles } from '@mui/styles';

// // // const useStyles = makeStyles({
// // //   imageBackground: {
// // //     backgroundImage: 'url("/images/homepage-background.jpg")',
// // //     backgroundSize: 'cover',
// // //     backgroundPosition: 'center',
// // //     height: '100vh',
// // //   },
// // //   sectionTitle: {
// // //     color: '#fff',
// // //     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
// // //     marginBottom: '2rem',
// // //   },
// // //   sectionText: {
// // //     color: '#fff',
// // //     textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
// // //   },
// // // });

// // const HomePage: React.FC = () => {
// //   const classes = useStyles();

// //   return (
// //     <div className={classes.imageBackground}>
// //       <Container maxWidth="lg">
// //         <Grid container spacing={2}>
// //           <Grid item xs={12}>
// //             <Typography variant="h1" align="center" className={classes.sectionTitle}>
// //               My E-commerce Website
// //             </Typography>
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <Typography variant="h3" align="center" className={classes.sectionTitle}>
// //               Shop the Latest Products
// //             </Typography>
// //             <Typography variant="body1" align="center" className={classes.sectionText}>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet lacus ac dolor tincidunt lobortis.
// //             </Typography>
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <div style={{ backgroundImage: 'url("/images/latest-products.jpg")', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <div style={{ backgroundImage: 'url("/images/featured-products.jpg")', height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }} />
// //           </Grid>
// //           <Grid item xs={12} md={6}>
// //             <Typography variant="h3" align="center" className={classes.sectionTitle}>
// //               Featured Products
// //             </Typography>
// //             <Typography variant="body1" align="center" className={classes.sectionText}>
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet lacus ac dolor tincidunt lobortis.
// //             </Typography>
// //           </Grid>
// //         </Grid>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default HomePage;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsSuccess } from "../redux/DemoSlice";
import { fetchPosts } from "../redux/DemoThunk";
import { Grid, Typography, Paper, Button } from "@mui/material";
import { AppDispatch } from "../redux/store";

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
             
               {/* <Link to="/">
              <img
                className="h-16 w-16 float-right mr-8"
                src={logoimg}
                alt="Logo"
              />
            </Link> */}
              <div className="flex">
                <img src={item.image} className="h-28 w-28" />
                <Button
                  component={Link}
                  to={`/post/${item.id}`}
                  state={{post: item}}
                  variant="contained"
                  color="primary"
                  style={{marginTop: "60px", marginLeft: "15px"}}
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