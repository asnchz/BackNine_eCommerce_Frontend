import React, { useState, useEffect } from "react";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  const [record, setRecord] = useState("");

  useEffect(() => {
    setRecord(props.location.state.productForDisplay)

    // const dummyRecord = {
    //   name: "Callaway Epic Speed Driver",
    //   category: "Clubs",
    //   description: "Don't poop on your neighbor's yard",
    //   price: 1000000
    // };
    // setRecord(dummyRecord);
  }, [props]);

  console.log("prop data from ProductDetails: ", props);
  return (
    <div className="form-wrapper">
      <form>
        {/* <div class="form-group"> */}
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
            //   id="inlineFormInput"
              placeholder={record.name}
            />
          </div>
          <div class="form-group">
            <label>Category</label>
            <input
              type="text"
              class="form-control"
            //   id="inlineFormInput"
              placeholder={record.category}
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
            //   id="inlineFormInput"
              placeholder={record.description}
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="text"
              class="form-control"
            //   id="inlineFormInput"
              placeholder={record.price}
            />
          </div>
        {/* </div> */}
      </form>
    </div>
  );
};

export default ProductDetails;
