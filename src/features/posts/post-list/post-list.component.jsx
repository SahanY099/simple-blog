import Grid from "@mui/material/Unstable_Grid2/Grid2";
import * as React from "react";

import PostListItem from "./post-list-item.component";

function PostList({ posts }) {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid xs={12} md={6} key={post.id}>
          <PostListItem {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
