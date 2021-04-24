import React from "react";
import StoryDetail from "../storyDetails/StoryDetail";
import { api } from "../../api/Api";

function Top() {
  return (
    <div>
      <StoryDetail apiFunc={api.top()} />
    </div>
  );
}

export default Top;
