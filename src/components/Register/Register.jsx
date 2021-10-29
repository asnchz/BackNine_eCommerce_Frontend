import React from "react";
import axios from "axios";
import useForm from "../UseForm/useForm";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {
  const history = useHistory();

  const { formValues, handleChange, handleSubmit } = useForm(register);

  function register() {
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            id="firstName"
            type="text"
            name="firstname"
            onChange={handleChange}
            value={formValues.firstname}
            required={true}
          />
        </label>

        <label>
          Last Name:
          <input
            id="lastName"
            type="text"
            name="lastname"
            onChange={handleChange}
            value={formValues.lastname}
            required={true}
          />
        </label>

        <label>
          Username:
          <input
            id="userName"
            type="text"
            name="username"
            onChange={handleChange}
            value={formValues.username}
            required={true}
          />
        </label>

        <label>
          Password:
          <input
            id="passWord"
            type="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            required={true}
          />
        </label>

        <label>
          Email:
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={formValues.email}
            required={true}
          />
        </label>

        <label>
          Phone Number:
          <input
            id="phoneNumber"
            type="text"
            name="phonenumber"
            onChange={handleChange}
            value={formValues.phonenumber}
            required={true}
          />
        </label>
        <button className="mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
