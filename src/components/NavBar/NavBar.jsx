import React from "react";
import "./NavBar.css";
import Login from "../Login/Login";

function NavBar(props) {
  let { setIsShowLogin } = props;

  let handleClick = () => {
    setIsShowLogin((loginInfo) => !loginInfo);
  };
  return (
    <div className="row row-space">
      <div className="col-md-12" style={{ padding: 0 }}>
        <div className="navbar">
          <h1>BackNine</h1>
          <span onClick={handleClick} className="loginicon">
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
