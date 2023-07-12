import { Alert, Collapse, Container, Typography } from "@mui/material";
import React, { useState } from "react";

import { PostForm, PostService } from "@features/posts";

function NewPost() {
  const [response, setResponse] = useState({});

  async function handleSubmit({ title, content, publishDate }) {
    const formatedPublishDate = publishDate.format("YYYY-MM-DD");
    const res = await PostService.createPost({
      title,
      content,
      publishDate: formatedPublishDate,
    });

    setResponse(await res);
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      <Typography variant="h5" sx={{ mb: 6 }}>
        Create a New Post
      </Typography>
      <Collapse in={Boolean(response.status)}>
        {response.status == 201 ? (
          <Alert sx={{ mb: 6 }}>Post created successfully!</Alert>
        ) : (
          <Alert sx={{ mb: 6 }} severity="error">
            Something went wrong...
          </Alert>
        )}
      </Collapse>
      <PostForm onSubmit={handleSubmit} />
    </Container>
  );
}

export default NewPost;
