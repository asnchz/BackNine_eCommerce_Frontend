import React from 'react';

const ShoppingCart = (props) => {
    return ( 
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.cartProducts.map((cart)=>{
                        return(
                        <tr key={cart.productId}>
                            <td>{cart.quantity}</td>
                            <td>{cart.userId}</td>
                            <td><button>Remove</button></td>
                        </tr>  
                        )  
                    })}
                </tbody>
            </table>
        </React.Fragment>

     );
}
 
export default ShoppingCart;
