import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
            results: [],
         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.searchProducts();
         this.props.searchResults(this.state.results);
     }

     async searchProducts(){
            console.log("Search " + this.state.search);
             const results = this.props.product.filter(product =>
                product.productName.toLowerCase().includes(this.state.search.toLowerCase()) ||
                product.category.toLowerCase().includes(this.state.search.toLowerCase()) ||
                 product.price.toLowerCase().includes(this.state.search.toLowerCase())
                );
            if(results != ''){
                console.log(results);
                this.state.results = results;
            }else{
                alert("No Results");
            }
     }

    render() { 
        return ( 
            <React.Fragment>
                <form className="" onSubmit = {this.handleSubmit}>
                    <input name="search" placeholder="Search..." onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default SearchBar;