import { useState } from "react";

const UseForm = (callback) => {

    const [formvalues, setFormValues] = useState([]);

    const handleChange = (event) => {
        event.persist();
        setFormValues({ ...formvalues, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return { values, handleChange, handleSubmit }
};

export default UseForm;
