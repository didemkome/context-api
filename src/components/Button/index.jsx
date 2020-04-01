import React, { useContext } from "react";

import {addUser, removeUser, updateUser} from "../../core/context/actions";
import { UserContext} from "../../core/context/store";
import {Container, ButtonContainer} from "./style";

const Button = () => {
    const { dispatch } = useContext(UserContext);

    return (
        <Container>
            <ButtonContainer
                type="button"
                onClick={() => dispatch(updateUser())}
            >
                Update
            </ButtonContainer>

            <ButtonContainer
                onClick={() =>
                    dispatch(addUser())
                }
            >
                Add User
            </ButtonContainer>
            <ButtonContainer onClick={() => dispatch(removeUser())}>
                Remove User
            </ButtonContainer>
        </Container>
    )
};

export default Button;
