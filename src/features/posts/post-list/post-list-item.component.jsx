import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

function PostListItem({ id, title, content, publish_date, author }) {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent sx={{ width: "55%" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {author.username}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "50%" }}
      >
        <CardActions>
          <Button size="small">Read more</Button>
        </CardActions>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {publish_date}
        </Typography>
      </Stack>

      <Box
        component="img"
        src="https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        sx={{
          width: "45%",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
    </Card>
  );
}

export default PostListItem;
