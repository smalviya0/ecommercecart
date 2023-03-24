import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Card, CardContent, Box } from "@mui/material";


function PostDetails() {
  const { state } = useLocation();

  if (!state?.post) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {state.post.title}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
            {state.post.body}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default PostDetails;
