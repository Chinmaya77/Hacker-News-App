import React from "react";
import StoryDetail from "../storyDetails/StoryDetail";
import { api } from "../../api/Api";

const Show = () => {
  return (
    <React.Fragment>
      <StoryDetail apiFunc={api.show()} />
    </React.Fragment>
  );
};

export default Show;
