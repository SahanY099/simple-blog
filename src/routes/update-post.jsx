import { Alert, Collapse, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PostForm, PostService } from "@features/posts";
import { useParams } from "react-router-dom";

function UpdatePost() {
  const [response, setResponse] = useState({});

  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    PostService.getPost(postId).then((res) => {
      setPost(res.data);
    });

    return () => {};
  }, []);

  async function handleSubmit({ title, content, publishDate }) {
    const formatedPublishDate = publishDate.format("YYYY-MM-DD");
    const res = await PostService.updatePost(postId, {
      title,
      content,
      publishDate: formatedPublishDate,
    });

    setResponse(await res);
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      <Typography variant="h5" sx={{ mb: 6 }}>
        Update Post
      </Typography>
      <Collapse in={Boolean(response.status)}>
        {response.status == 200 ? (
          <Alert sx={{ mb: 6 }}>Post updated successfully!</Alert>
        ) : (
          <Alert sx={{ mb: 6 }} severity="error">
            Something went wrong...
          </Alert>
        )}
      </Collapse>
      <PostForm onSubmit={handleSubmit} currentPost={post} />
    </Container>
  );
}

export default UpdatePost;
