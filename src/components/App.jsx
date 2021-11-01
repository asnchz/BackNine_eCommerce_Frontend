import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Register from "./Register/Register";
import image from "../Image/HomePage.jpg";
import axios from "axios";
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from "./Login/Login"

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


  async getProductClubs() {
    try {
      let response = await axios.get(
        "https://localhost:44394/api/product/Clubs"
      );
      console.log(response.data);
      this.setState({
        Clubs: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  async getProductBalls() {
    try {
      let response = await axios.get(
        "https://localhost:44394/api/product/Balls"
      );
      console.log(response.data);
      this.setState({
        Balls: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  async getProductBags() {
    try {
      let response = await axios.get(
        "https://localhost:44394/api/product/Bags"
      );
      console.log(response.data);
      this.setState({
        Bags: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  async getProductApparel() {
    try {
      let response = await axios.get(
        "https://localhost:44394/api/product/Apparel"
      );
      console.log(response.data);
      this.setState({
        Apparel: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  async getProductTech() {
    try {
      let response = await axios.get(
        "https://localhost:44394/api/product/Tech"
      );
      console.log(response.data);
      this.setState({
        Tech: response.data,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  render() {
    const user = this.state.user;
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
          <div>
          <NavBar user={user} />
          </div>
          <Switch>
            <Route
            path ='/profile'
            render= {props =>{
              if(!user){
                return<Redirect to="/login" />;
              } else{
                return<App {...props} user={user} />
              }
            }} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component = {Register} />
            {/* <Route path="/productDetails" component ={ProductDetails} /> */}
          </Switch>
          
          <p className="front-page-header">The Place to Buy and Sell your Golf gear!</p>
        </div>
      </div>
    );
  }
}

export default App;
