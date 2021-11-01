import React from "react";
import "./ProductList.css";
import { useHistory } from "react-router";

const ProductList = (props) => {
    const history = useHistory();
    console.log(props);

    const handleDetails = (record) => {
        history.push({
            pathname: "/productDetails",
            state: {
                recordForDisplay: record,
            },
        });
    }
    return (
        <table className="table-container">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Category </th>
                    <th> Description </th>
                    <th> Price </th>
                    <th> Actions </th>
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
                                 Detail </button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table> 
    );
};

export default ProductList;