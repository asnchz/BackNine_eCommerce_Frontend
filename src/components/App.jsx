import jwtDecode from "jwt-decode";
import React, {Component}from "react";
import './App.css'
import NavBar from "./NavBar/NavBar";


class App extends Component{
    state = {
        loggedInUser: null,
    }

    componentDidMount(){
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({loggedInUser: user});
        }catch(error) {
            console.log(error);
        }
    }
    
    render(){
        return(
            <div className = "container-fluid">
                <NavBar />
            
                    <h1>The Place to Buy and Sell Golf Gear</h1>
                
            </div>
        )
    }
}

export default App;