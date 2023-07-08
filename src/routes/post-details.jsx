import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostService } from "@features/posts";

/* 
📌 add 404 handling
📌 use slug
 */

function PostDetails() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    PostService.getPost(postId).then((res) => {
      setPost(res.data);
    });

    return () => {};
  }, []);

  console.log(post);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {post && (
        <Box>
          <Stack direction="column" mb={4}>
            <Typography variant="h5">{post.author.username}</Typography>
            <Typography variant="body2">{post.publish_date}</Typography>
          </Stack>

          {post.content}
        </Box>
      )}
    </Container>
  );
}

export default PostDetails;
