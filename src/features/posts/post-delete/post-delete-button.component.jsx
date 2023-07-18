import { Button } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import PostDeleteConfirmationDialog from "./post-delete-confirmation-dialog.component";

function PostDeleteButton() {
  const { postId } = useParams();

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  function handleConfirmationDialogOpen() {
    setOpenConfirmationDialog(true);
  }

  function handleConfirmationDialogClose() {
    setOpenConfirmationDialog(false);
  }

  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleConfirmationDialogOpen}
        sx={{ fontWeight: "bold" }}
      >
        Delete
      </Button>

      <PostDeleteConfirmationDialog
        onClose={handleConfirmationDialogClose}
        open={openConfirmationDialog}
        postId={postId}
      />
    </>
  );
}

export default PostDeleteButton;
