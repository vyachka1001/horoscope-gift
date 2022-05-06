import React from "react";
import { FormInput } from "../authorization_elements";

const Input = (props) => {
    return (
        <FormInput value={props.value}
                onChange={(event) => props.setValue(event.target.value)}
                type={props.type} required/>
    );
};

export default Input;