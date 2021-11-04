import React from "react";
import "./ProductList.css";
import { useHistory } from "react-router";

const ProductList = (props) => {
    const history = useHistory();
    console.log("from ProductList: ", props);

    const handleDetails = (product) => {
        history.push({
            pathname: "/productDetails",
            state: {
                productForDisplay: product,
            },
        });
    };
    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Category </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th> Details </th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => handleDetails(product) } >
                                 Review/Rating{" "} </button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table> 
    );
};

export default ProductList;