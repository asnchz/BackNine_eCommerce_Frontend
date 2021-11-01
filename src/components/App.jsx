import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Register from "./Register/Register";
import image from "../Image/HomePage.jpg";
import axios from "axios";
<<<<<<< HEAD
=======
import Login from "./Login/Login";
import ProductList from "./ProductList/ProductList";
>>>>>>> 7d9172f5cd3e3d408af61fb7b918d3fee01e04a1

class App extends Component {
  state = {
    // loggedInUser: null,
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
<<<<<<< HEAD
          <NavBar />
          <Switch>
            <Route exact path='/login'>
              <Login/>
            </Route>
          </Switch>
          <p className="front-page-header">The Place to Buy and Sell your Golf gear!</p>
=======
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
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
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
>>>>>>> 7d9172f5cd3e3d408af61fb7b918d3fee01e04a1
        </div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
