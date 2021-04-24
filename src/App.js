import React from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./components/page/Page";
import Top from "./components/molecules/stories/Top";
import New from "./components/molecules/stories/New";
import Lists from "./components/organisms/footer/Lists";
import Ask from "./components/molecules/stories/Ask";
import Show from "./components/molecules/stories/Show";
import Jobs from "./components/molecules/stories/Jobs";

function App() {
  return (
    <div className="App">
      <Router>
        <Page>
          <Switch>
            <Route path="/new">
              <New />
            </Route>

            <Route path="/top">
              <Top />
            </Route>
            <Route exact path="/">
              <Top />
            </Route>

            <Route path="/ask">
              <Ask />
            </Route>
            <Route path="/show">
              <Show />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  );
}

export default App;
