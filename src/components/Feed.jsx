import React from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Post from "./Post";

function Feed() {
  return (
    <Box p={2} flex={4} bgcolor={"background.default"} color={"text.primary"}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}

export default Feed;
