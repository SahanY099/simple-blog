import PostService from "@features/posts/post-service";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

import PostDeleteSuccessDialog from "./post-delete-success-dialog.component";

function PostDeleteConfirmationDialog({ onClose, open, postId }) {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  async function deletePost() {
    const res = await PostService.deletePost(postId);
    if ((await res.status) == 204) {
      onClose();
      handleSuccessDialogOpen();
    }
  }

  function handleSuccessDialogClose() {
    setOpenSuccessDialog(false);
  }

  function handleSuccessDialogOpen() {
    setOpenSuccessDialog(true);
  }

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs">
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{ fontWeight: "bold" }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            variant="contained"
            color="error"
            onClick={deletePost}
            sx={{ fontWeight: "bold" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <PostDeleteSuccessDialog
        onClose={handleSuccessDialogClose}
        open={openSuccessDialog}
      />
    </>
  );
}

export default PostDeleteConfirmationDialog;
