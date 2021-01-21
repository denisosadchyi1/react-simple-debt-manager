import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  li{
    margin: 0 15px;
    font-weight: 700;
  }
  .active{
    color: #007bff;
  }
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      DebtManager
      </a>
      <NavWrapper className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <CustomNavLink className="nav-link" to="/" exact className="nav-item">
              Home
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="/debtors" className="nav-item">
              Debtors
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink className="nav-link" to="/history"  className="nav-item">
              History
            </CustomNavLink>
          </li>
        </ul>
      </NavWrapper>
    </nav>
  );
};

export default Navigation;
