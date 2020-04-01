import React, { useContext } from "react";

import { updateUser } from "../../core/context/actions";
import { MainContext } from "../../core/context/store";

import {Container} from "./style";

const Button = () => {
    const { dispatch } = useContext(MainContext);

    return (
        <Container>
        <button
        type="button"
        onClick={() => dispatch(updateName())}
    >
        Update
        </button>
        </Container>
    )
};

export default Button;
