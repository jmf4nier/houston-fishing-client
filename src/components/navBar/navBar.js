import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import history from "../../history";
import ClickOutside from "./clickOutside";
import { showLogin, logoutUser } from "../actions/userActions";
import { connect } from "react-redux";

class NavBar extends React.Component {
  state = {
    expanded: false,
    showLogin: false
  };
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.logoutUser();
  };

  handleLoginClick = async () => {
    await this.setState({
      showLogin: !this.state.showLogin
    });
    this.props.showLogin(this.state.showLogin);
  };

  render() {
    return (
      <ClickOutside
        style={{}}
        onClickOutside={() => {
          this.setState({ expanded: false });
        }}
      >
        <SideNav
          style={{ backgroundColor: "black" }}
          id="sideNav"
          onSelect={selected => {}}
          defaultExpanded={this.state.expanded}
          onMouseOver={() => {
            this.setState({ expanded: true });
          }}
          onMouseOut={() => {
            this.setState({ expanded: false });
          }}
        >
          <SideNav.Nav>
            <NavItem onClick={() => this.props.handleClick()} eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ fontSize: "1.75vw" }}>Home</NavText>
            </NavItem>

            <NavItem
              eventKey="Login"
              onClick={() => {
                this.handleLoginClick();
                window.scrollTo(0, 0); ////scrolls to top of window when login clicked
              }}
            >
              <NavIcon>
                <i
                  className="fas fa-sign-in-alt"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ fontSize: "1.75vw" }}>
                <p>Login</p>
              </NavText>
            </NavItem>

            <NavItem eventKey="Logout">
              <NavIcon>
                <i
                  className="fas fa-sign-out-alt"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText style={{ fontSize: "1.75vw" }}>
                <p
                  onClick={() => {
                    this.handleLogout();
                    this.handleLoginClick();
                  }}
                >
                  Logout
                </p>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </ClickOutside>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  { showLogin, logoutUser }
)(NavBar);
