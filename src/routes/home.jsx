import { Container } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";

import { PostList, PostService } from "@features/posts";

function Home() {
  const [posts, setPosts] = useState([]);

  useLayoutEffect(() => {
    PostService.getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <PostList posts={posts} />
    </Container>
  );
}

export default Home;
