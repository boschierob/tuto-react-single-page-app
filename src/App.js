import React from "react";
import "./styles.css";
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Docs from "./Components/Docs";
import Community from "./Components/Community";
import Tutorials from "./Components/Tutorials";
import Menu from "./Components/Menu";
import ErreurPage from "./Components/ErreurPage";


export default function App() {
  return (
    <BrowserRouter className="App">
      <Menu />
        <Switch>
          <Route exact path="/" component={Docs}/>
          <Route path="/docs" component={Docs}/>
          <Route path="/tutorials" component={Tutorials}/>
          <Route path="/community" component={Community}/>
          <Route component={ErreurPage}/>
        </Switch>
      
    </BrowserRouter>
  );
}
