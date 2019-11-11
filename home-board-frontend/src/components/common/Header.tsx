import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Dispatch, bindActionCreators } from "redux";
import * as actionCeator from "../../state/auth/authActionCreator";
import { AppState } from "../../state";
import { connect } from "react-redux";

type props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Header: React.FunctionComponent<props> = props => {
  const activeStyle = { color: "orange" };

  useEffect(() => {
    props.checkCurrentUser();
  }, []);

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
          <a href="#" onClick={() => props.signIn()}>
            {props.authenticated ? "Logout" : "Login"}
          </a>
        </ul>
      </div>
    </nav>
  );
};

export function mapStateToProps(state: AppState) {
  return {
    authenticated: state.authenticated
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    signIn: bindActionCreators(actionCeator.signIn, dispatch),
    checkCurrentUser: bindActionCreators(
      actionCeator.checkCurrentUser,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
