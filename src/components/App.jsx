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
      <div>
        <div
          style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "absolute",
              height: "100vh",
              width: "100vw",
            }}
        >
          <NavBar />
<<<<<<< HEAD
          <Register button type="button" data-toggle="modal" data-target="#Modal" />
          <h1>The Place to Buy and Sell Golf Gear</h1>
=======
          <p className="front-page-header">The Place to Buy and Sell your Golf gear!</p>
>>>>>>> 7dd52304a895f29ca2e17753af94b0391d8c75c8
        </div>
      </div>
    );
  }
}

export default App;
