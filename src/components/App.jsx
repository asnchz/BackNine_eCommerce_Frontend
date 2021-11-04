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
import ProductDetails from "./ProductDetails/ProductDetails";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class App extends Component {
  state = {
    loggedInUser: null,
    products: [],
    cart:[],
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    this.getAllProducts();
    try {
      const user = jwtDecode(jwt);
      this.setState({ loggedInUser: user });
      console.log(this.state.products);
    } catch (error) {
      console.log(error);
    }
    this.getProductCategory("Clubs");
  }

  getAllProducts = async ()  => {
    let response = await axios.get('https://localhost:44394/api/products') ;
    this.setState({
      products : response.data,
    });
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

  getCartProducts = async () => {
    let response = await axios.get("https://localhost:44394/api/cart");
    this.setState({
      cart: response.data,
    });
  };

  search = (results) => {
    console.log(results);
    this.setState({
      products: results,
    });
  };

  registerNewUser = async (user) => {
    try {
      const response = await axios.post('https://localhost:44394/api/authentication' , user);
      this.loggedInUser({'userName' : user.userName, 'password': user.password })
      window.location = '/';
    } catch(error) {
      console.log(error, 'Invalid input');
    }
  }

  userLogin = async (login) => {
    try {
      let response = await axios.post('https://localhost:44394/api/authentication/login', login);
      console.log(response);
      this.setState({
        user: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      alert(`Welcome!`)
      window.location = '/';
    } catch(error) {
      alert('Username and/or password is incorrect. Try again or create account');
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
          <NavBar user={this.state.user} />
          <Switch>
            <Route
              path="/profile"
              render={(props) => {
                if (!this.state.user) {
                  return (<Login {...props} userLogin={this.userLogin} />);
                } else {
                  return( <ProductList {...props} productList={this.state.products} search={this.search} />);
                }
              }}
            />
            <Route path="/login" render={props => <Login {...props} userLogin={this.userLogin} />} />
            <Route path="/signup" render={props => <Register {...props} registerNewUser={this.registerNewUser} />} />
            <Route path="/productList" render={props => <ProductList {...props} getAllProducts = {this.getAllProducts} />} />
            <Route path="/productDetails" component ={ProductDetails} />
            <Route path="/shoppingCart" render={(props) => (<ShoppingCart {...props} cartProducts={this.state.cart} />)}/>
          </Switch>

            <p className="front-page-header">
              The Place to Buy and Sell your Golf gear!
            </p>

            {console.log(
              "Prop data from App: ",
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
