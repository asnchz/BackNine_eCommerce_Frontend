import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const { setUserToken } = props;
  const history = useHistory();

  const userLogin = {
    username: "",
    password: "",
  };
  const [loginInfo, setLoginInfo] = useState(userLogin);

  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
  };

  const login = async () => {
    let user = userLogin;
    let response = await axios
      .post("https://localhost:44394/api/authentication/login", user)
      .catch(function (error) {
        if (error.response) {
          alert("Login is incorrect. Try again");
        }
      });
    if (response !== undefined) {
      setUserToken(response.data.token);
      history.push("/home");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-wrapper">
        <h2>Please Log In</h2>
        <label>
          <p>Username</p>
        </label>
        <input
          type="text"
          placeholder="Enter Username.."
          onChange={handleChange}
          required={true}
        />
        <label>
          <p>Password</p>
        </label>
        <input
          type="password"
          placeholder="Enter Password.."
          onChange={handleChange}
          required={true}
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
