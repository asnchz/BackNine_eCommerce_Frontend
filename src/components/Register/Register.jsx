import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      phonenumber: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
    };
    this.props.registerNewUser(user);
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      phonenumber: "",
    });
  };

  render() {
    return (
      <div class="login-wrapper">
        <h2>Register New Account</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                onChange={this.handleChange}
                value={this.state.firstname}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={this.handleChange}
                value={this.state.lastname}
              />
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />

              <label>Password</label>
              <input
                type="text"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />

              <label>Email</label>
              <input
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phonenumber"
                onChange={this.handleChange}
                value={this.state.phonenumber}
              />
            <button type="submit">Create Account</button>
          </table>
        </form>
      </div>
    );
  }
}

export default Register;
