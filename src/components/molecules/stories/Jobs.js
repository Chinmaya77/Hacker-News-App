import React from "react";
import StoryDetail from "../storyDetails/StoryDetail";
import { api } from "../../api/Api";

const Jobs = () => {
  return (
    <React.Fragment>
      <StoryDetail apiFunc={api.job()} />
    </React.Fragment>
  );
};

export default Jobs;
