import React from 'react';
//import Authentication from "./Authentication";
import AuthModalContext from "./AuthModalContext";
import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";
// import {
//   Switch,
//   Route,
//   BrowserRouter as Router,
// } from "react-router-dom";
// import Board from "./Board";
// import CommentPage from "./CommentPage";
// import PostFormModal from "./PostFormModal";
import PostFormModalContext from "./PostFormModalContext";
import Routing from "./Routing";
import RedirectContext from "./RedirectContext";


function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showPostFormModal, setShowPostFormModal] = useState(false);
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {

    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(response => setUser(response.data));

  }, []);

  function logout() {
    axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <div>
      <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
        <PostFormModalContext.Provider value={{ show: showPostFormModal, setShow: setShowPostFormModal }}>
          <UserContext.Provider value={{ ...user, logout, setUser }}>
            <RedirectContext.Provider value={{ redirect, setRedirect }}>

              <Routing />

              {/* <Router>
              <Switch>
                <Route exact path="/" component={Board} />
                <Route exact path="/comments/:id" component={CommentPage} />
              </Switch>
            </Router>

            <Authentication />
            <PostFormModal /> */}

            </RedirectContext.Provider>
          </UserContext.Provider>
        </PostFormModalContext.Provider>
      </AuthModalContext.Provider>
    </div>
  );
}

export default App;
