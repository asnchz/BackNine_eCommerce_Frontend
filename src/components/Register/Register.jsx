import React from "react";
import axios from "axios";
import UseForm from "../UseForm/UseForm";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const history = useHistory();

  const { formValues, handleChange, handleSubmit } = UseForm(userRegister);

  function userRegister() {
    register();
    history.push("/");
  }

  const register = async () => {
    await axios
      .post(`https://localhost:44394/api/authentication`, formValues)
      .then((response) => {
        props.getUser(response.data);
        props.getItemsInCart(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
          <div class="login-wrapper">
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="col-md-6">
                  <label>First Name</label>
                  <input
                    id="firstname"
                    onChange={handleChange}
                    value={formValues.firstname}
                    required={true}
                  />
                </div>
                <div class="col-md-6">
                  <label>Last Name</label>
                  <input
                    id="lastname"
                    onChange={handleChange}
                    value={formValues.lastname}
                    required={true}
                  />
                </div>
                <div class="col-md-6">
                  <label>Username</label>
                  <input
                    id="username"
                    onChange={handleChange}
                    value={formValues.username}
                    required={true}
                  />
                </div>
                <div class="col-md-6">
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={handleChange}
                    value={formValues.password}
                    required={true}
                  />
                </div>
                <div class="col-md-6">
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={handleChange}
                    value={formValues.email}
                    required={true}
                  />
                </div>
                <div class="col-md-6">
                  <label>Phone Number</label>
                  <input
                    id="phonenumber"
                    onChange={handleChange}
                    value={formValues.phonenumber}
                    required={true}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="submit" >
                  Create Account
                </button>
              </div>
            </form>
          </div>
  );
};

export default Register;
