import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions";

export const Navbar = () => {

  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const onClickLogOut = () => {
    dispatch(logout(Navigate));
  };

  return (
    <div
      className="navbar shadow"
      style={{ position: "sticky", top: "-10px", zIndex: "9" }}
    >
      <div 
          className="text-center col-md-1"
          onClick={() => {
            setIsActive(!isActive)
          }}>
        <img
          src={logo}
          className="rounded fluid-img"
          alt="..."
        />
      </div>
      <div className={`col-md-9 ListItems ${isActive ? "active" : ""}`}>
        <ul className="text-white mb-0 parentUL text-dark">
          
          <Link
            onClick={(e) => {
              e.preventDefault();
            setIsActive(!isActive)
              Navigate("/");
            }}
          >
            <li>Home</li>
          </Link>
          
          <Link
            onClick={(e) => {
              e.preventDefault();
              setIsActive(!isActive)
              Navigate("/profile");
            }}
          >
            <li>Profile</li>
          </Link>
          
          <Link
            onClick={(e) => {
              e.preventDefault();
            setIsActive(!isActive)
            Navigate("/chats");
            }}
          >
            <li>Chat</li>
          </Link>
          
          {/* <Link
          className="d-flex justify-content-start align-items-center flex-row "
            onClick={(e) => {
              e.preventDefault();
            setIsActive(!isActive)
            }}
          >
            <li>Configuration
            <i class='bx bx-chevron-down text-white'></i>
            </li>
          </Link> */}
        </ul>
      </div>
      <div className="col-md-2 LogoutButton">
        <span className="text-white">
          {localStorage.getItem("authUser") && JSON.parse(localStorage.getItem("authUser")).username}
        </span>
        <i
          className="bx bx-log-in text-white"
          style={{
            fontSize: "200%",
            cursor: "pointer",
          }}
          onClick={onClickLogOut}
        ></i>
      </div>
    </div>
  );
};
