import React, {Component}from "react";
import './App.css'
import NavBar from "./NavBar/NavBar";

class App extends Component{
    constructor(props) {
    super(props);
    this.state = {};
    }
    render(){
        return(
            <div className = "container-fluid">
                <NavBar />
            </div>
        )
    }
}

export default App;