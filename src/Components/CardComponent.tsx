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
  console.log(posts);
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
              <Typography
                variant="body1"
                component="p"
                className="mb-2 leading-normal"
              >
                {item.image}
              </Typography>
              {/* <Button
                variant="contained"
                color="secondary"
                className="px-4 py-2 text-sm text-white bg-green-500 rounded shadow"
              >
                Add to Cart
              </Button>

              <Button
                component={Link}
                to={`/post/${item.id}`}
                state={{ post: item }}
                variant="contained"
                color="primary"
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              >
                Read more
              </Button> */}
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}