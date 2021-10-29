import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Register from "./Register/Register";
import image from "../Image/HomePage.jpg";

class App extends Component {
  state = {
    loggedInUser: null,
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ loggedInUser: user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100%",
          width: "100%"
        }}
      >
        <div className="container-fluid">
          <NavBar />
          <Register button type="button" data-toggle="modal" data-target="#Modal" />
          <h1>The Place to Buy and Sell Golf Gear</h1>
        </div>
      </div>
    );
  }
}

export default App;