import React from "react";
import StoryDetail from "../storyDetails/StoryDetail";
import { api } from "../../api/Api";

function New() {
  console.log("new");
  return (
    <div>
      <StoryDetail apiFunc={api.newest()} />
    </div>
  );
}

export default New;
