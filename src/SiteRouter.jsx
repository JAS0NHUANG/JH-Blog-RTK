import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import About from "./pages/About";
import Login from "./pages/Login";

import Header from "./components/Header";
import Footer from "./components/Footer";

const SiteRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/:id">
            <SinglePost />
          </Route>
          <Route exact path="/new-post">
            <NewPost />
          </Route>
          <Route exact path="/edit-post/:id">
            <EditPost />
          </Route>
          <Route exact path="/archive">
            <Archive />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default SiteRouter;
