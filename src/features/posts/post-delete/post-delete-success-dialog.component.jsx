import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const RedirectUrl = "/";

function PostDeleteSuccessDialog({ open }) {
  const navigate = useNavigate();

  function redirectUser() {
    navigate(RedirectUrl);
  }

  return (
    <Dialog open={open} onClose={redirectUser} maxWidth="xs" fullWidth={true}>
      <DialogTitle
        sx={{
          textAlign: "center",
          mb: 1,
        }}
      >
        Post Deleted Successfully
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TaskAltIcon
          sx={{
            fontSize: 75,
            color: (theme) => theme.palette.success.light,
            mb: 1,
          }}
        />
        <Button variant="contained" onClick={() => navigate(RedirectUrl)}>
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default PostDeleteSuccessDialog;
