import React from "react";
import logo from "../images/logo4.png";
import { Header } from "antd/es/layout/layout";
import { NavLink } from "react-router-dom";
import list from "../Reuse/List.css";
import { Input, Space } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const Navbar = () => {
  return (
    <Header style={{ backgroundColor: "grey" }}>
      <div className="container1">
        <div className="logocontainer">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className="list">
          <div className="search-container" style={{ paddingBottom: "80px" }}>
            <Search
              placeholder=" "
              onSearch={onSearch}
              enterButton
              className="custom-search"
              style={{ width: "490px", maxWidth: "360px", paddingTop: "15px" }}
            />
          </div>

          <div className="aligntem">
            <NavLink exact to="/" className="listItem" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="listItem" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/services"
              className="listItem"
              activeClassName="active"
            >
              Services
            </NavLink>
            <NavLink to="/policy" className="listItem" activeClassName="active">
              Policy
            </NavLink>
            <NavLink
              to="/contact"
              className="listItem"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
