import React, {useState} from "react";
import axios from axios;
import { useHistory } from "react-router-dom";


const Login = (props) => {
    const {setUserToken}= props;
    const history = useHistory();

    const userLogin = {
        username:'',
        password:''
    }
    const [loginInfo, setLoginInfo] = useState(userLogin);

    const handleChange = event => {
        setLoginInfo({...loginInfo, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login();
    }

    const login = async () =>{
        let user = loginInfo;
        let response = await axios.post("https://localhost:44394/api/authentication/login", user).catch(function(error){
            if (error.response){
                alert("Login is incorrect. Try again")
            }
        });
        if (response !== undefined){
            setUserToken(response.data.token)
            history.push("/home")
        }
    }

  return (
      <div className={`${!props ? "active": ""} show`}>
          <div className="login-form">
              <div className="form-box solid">
                  <form>
                      <h1 className="login-text">Login</h1>
                      <label>Username</label><br></br>
                      <input
                      type = "text"
                      name = "username"
                      className = "login-box"
                      /><br></br>
                      <label>Password</label><br></br>
                      <input
                      type = "password"
                      name = "password"
                      className = "login-box"
                      /><br></br>
                      <input type ="submit" value ="LOGIN" className ="login-btn"/>
                  </form>
              </div>
          </div>

      </div>
  );
}

export default Login;