import { Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import PostContentEditor from "./post-content-editor.component";

function PostForm({ onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      content: "{}",
      publishDate: dayjs(),
    },
  });

  function handleEditorChange(data) {
    setValue("content", JSON.stringify(data));
  }

  return (
    <Stack
      direction="column"
      gap={4}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="title"
        control={control}
        rules={{ required: "Title is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            error={Boolean(errors.title)}
            label="Title"
            helperText={errors.title && errors.title.message}
            variant="outlined"
            placeholder="Title of the post"
          />
        )}
      />
      <Controller
        name="publishDate"
        control={control}
        rules={{ required: "Publish date is required" }}
        render={({ field }) => (
          <DatePicker
            {...field}
            label="Publish Date"
            slotProps={{
              textField: {
                error: Boolean(errors.publishDate),
                helperText: errors.publishDate && errors.publishDate.message,
              },
            }}
          />
        )}
      />

      <PostContentEditor onChange={handleEditorChange} />

      <Stack direction="row" justifyContent="end" gap={4}>
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 2, fontWeight: 600 }}
        >
          Create the post
        </Button>
        <Button
          variant="contained"
          href="/"
          color="secondary"
          sx={{ mt: 2, fontWeight: 600 }}
        >
          Cancel
        </Button>
      </Stack>
    </Stack>
  );
}

export default PostForm;
