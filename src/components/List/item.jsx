import React from 'react';

const Item = ({item}) => {
    return (
            <li>
                <h1>{item.name}</h1>
                <h4>{item.title}</h4>
            </li>
    );
};

export default Item;