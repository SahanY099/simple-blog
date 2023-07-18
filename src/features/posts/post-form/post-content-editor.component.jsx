import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { Box, InputLabel } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function PostContentEditor({ onChange, currentPostContent }) {
  const editorjsContainerId = "editorjs-container";
  const editorInstaceRef = useRef();
  const [editorInstance, setEditorInstance] = useState();

  function initEditor() {
    const editor = new EditorJS({
      holder: editorjsContainerId,
      onReady: () => {
        editorInstaceRef.current = editor;
      },
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
    return editor;
  }

  useEffect(() => {
    if (editorInstaceRef.current === null) {
      setEditorInstance(initEditor());
    }

    return () => {
      editorInstaceRef?.current?.destroy();
      editorInstaceRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (editorInstance !== undefined && currentPostContent !== undefined) {
      editorInstance.isReady?.then(() => {
        editorInstaceRef.current.render(currentPostContent);
      });
    }
  }, [currentPostContent]);

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
