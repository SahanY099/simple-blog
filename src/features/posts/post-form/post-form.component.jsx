import { Button, Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";

function PostForm({ onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      publishDate: dayjs(),
    },
  });

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

      <Controller
        name="content"
        control={control}
        rules={{ required: "Content is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            rows={8}
            error={Boolean(errors.content)}
            label="Content"
            helperText={errors.content && errors.content.message}
            variant="outlined"
            placeholder="Content of the post"
          />
        )}
      />
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