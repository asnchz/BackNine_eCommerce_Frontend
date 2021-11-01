import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Register from "./Register/Register";
import image from "../Image/HomePage.jpg";
import axios from "axios";
import Login from "./Login/Login";
import ProductList from "./ProductList/ProductList";

class App extends Component {
  state = {
    loggedInUser: [],
    products: [],
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({ loggedInUser: user });
    } catch (error) {
      console.log(error);
    }
    this.getProductCategory("Clubs");
  }

  async getProductCategory(category) {
    // category = "Clubs"
    try {
      let response = await axios.get(
        `https://localhost:44394/api/product/${category}`
      );
      console.log(response.data);
      this.setState({
        selectedCategoryData: response.data,
        selectedCategory: category,
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  registerNewUser = async (user) => {
    try {
      const response = await axios.post('https://localhost:44394/api/authentication' , user);
      this.loggedInUser({'userName' : user.userName, 'password': user.password })
      window.location = '/';
    } catch(error) {
      console.log(error, 'error with register user');
    }
  }

  userLogin = async (login) => {
    try {
      let response = await axios.post('https://localhost:44394/api/authentication/login', login);
      localStorage.setItem('token', response.data.token);
      window.location = '/';
    } catch(error) {
      console.log(error, 'error with logged in user');
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
              path="/profile"
              render={(props) => {
                if (!user) {
                  return <Redirect to="/login" />;
                } else {
                  return <App {...props} user={user} />;
                }
              }}
            />
            <Route path="/login" render={props => <Login {...props} userLogin={this.userLogin} />} />
            <Route path="/signup" render={props => <Register {...props} registerNewUser={this.registerNewUser} />} />
            <Route path="/productDetails" component ={ProductList} />
          </Switch>

          <p className="front-page-header">
            The Place to Buy and Sell your Golf gear!
          </p>
          {console.log(
            "Potential prop data: ",
            this.state.selectedCategoryData
          )}
          {this.state.selectedCategoryData !== undefined && (
            <ProductList products={this.state.selectedCategoryData} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
