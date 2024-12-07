import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <section className="membership-advertisement">
        <p>Get MovieMax Membership. 30-day return or refund guarantee,</p>
        <div>
          <NavLink to={"/signin"} className={({isActive}) => isActive ? "login link" : "login"}>SIGN IN</NavLink>
          <NavLink to={"/signup"} className={({isActive}) => isActive ? "login link" : "login"}>SIGN UP</NavLink>
        </div>
      </section>
      <nav>
        <h1 className="logo">MovieMax</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            MOVIES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;
