import React from "react";
import StoryDetail from "../storyDetails/StoryDetail";
import { api } from "../../api/Api";

const Ask = () => {
  return (
    <React.Fragment>
      <StoryDetail apiFunc={api.ask()} />
    </React.Fragment>
  );
};

export default Ask;
