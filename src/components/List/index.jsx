import React, { useContext } from 'react';

import { UserContext } from "../../core/context/store";
import Item from "./item";

const List = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <ul>
                {
                    user.map((item) => {
                        return(
                            <Item key={item.title} item={item}/>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default List;