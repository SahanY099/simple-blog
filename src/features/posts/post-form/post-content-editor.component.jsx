import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Box, InputLabel } from "@mui/material";
import React, { useEffect, useRef } from "react";

function PostContentEditor({ onChange }) {
  const editorRef = useRef(null);
  const editorjsContainerId = "editorjs-container";

  useEffect(() => {
    const initializeEditor = async () => {
      editorRef.current = await new EditorJS({
        holder: editorjsContainerId,
        tools: {
          header: {
            class: Header,
            inlineToolbar: ["link"],
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
        },
        onChange: (api) => {
          api.saver.save().then((data) => {
            onChange(data);
          });
        },
      });
    };

    initializeEditor();

    return () => {
      if (editorRef.current) {
        if (typeof editorRef.current.destroy === "function") {
          editorRef.current.destroy();
        }
      }
    };
  }, []);

  return (
    <>
      <InputLabel htmlFor={editorjsContainerId}>Content</InputLabel>
      <Box
        id={editorjsContainerId}
        sx={{
          width: "100%",
        }}
      />
    </>
  );
}

export default PostContentEditor;
