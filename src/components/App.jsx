import jwtDecode from "jwt-decode";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import Register from "./Register/Register";
import image from "../Image/HomePage.jpg";
import axios from "axios";
import ProductList from "./ProductList/ProductList";

// >>>>>>> 32ea14c544c2ce6a20713bf62377bc59c0d9b740

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
        selectedCategory: category
      });
    } catch (ex) {
      alert("Error in API Call");
    }
  }

  // async getProductCategory() {
  //   try {
  //     let response = await axios.get(
  //       `https://localhost:44394/api/product/Clubs`
  //     );
  //     console.log(response.data);
  //     this.setState({
  //       selectedCategoryData: response.data,
  //     });
  //   } catch (ex) {
  //     alert("Error in API Call");
  //   }
  // }

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
          <Register
            button
            type="button"
            data-toggle="modal"
            data-target="#Modal"
          />
          <h1>The Place to Buy and Sell Golf Gear</h1>
          <p className="front-page-header">
            The Place to Buy and Sell your Golf gear!
          </p>
          {console.log("Potential prop data: ", this.state.selectedCategoryData )}
          {this.state.selectedCategoryData != undefined && <ProductList products={this.state.selectedCategoryData} /> }
        </div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    );
  }
}

export default App;