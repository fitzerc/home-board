import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "firebase";

function Header() {
  const activeStyle = { color: "orange" };

  function signin() {
    const provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink activeStyle={activeStyle} exact to="/">
              Home
            </NavLink>{" "}
            {" | "}{" "}
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/meals">
              Meals
            </NavLink>{" "}
            {" | "}
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/groceries">
              Grocery List
            </NavLink>{" "}
            {" | "}
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/todos">
              Todo List
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <a href="#" onClick={() => signin()}>
            login
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
