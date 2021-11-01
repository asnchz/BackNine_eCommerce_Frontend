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
    <div
      class="modal fade"
      id="Modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Register New Account
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    id="firstname"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.firstname}
                    required={true}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    id="lastname"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.firstname}
                    required={true}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Username</label>
                  <input
                    id="username"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.firstname}
                    required={true}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Password</label>
                  <input
                    id="password"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.password}
                    required={true}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Email</label>
                  <input
                    id="email"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.email}
                    required={true}
                  />
                </div>
                <div class="form-group col-md-6">
                  <label>Phone Number</label>
                  <input
                    id="phonenumber"
                    class="form-control"
                    onChange={handleChange}
                    value={formValues.phonenumber}
                    required={true}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
