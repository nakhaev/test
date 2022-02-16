import React from "react";
import Option from "./option";

const Item = props => {
    const {name, label} = props;
    const options = [1, 2, 3, 4, 5]



    return (
        <div style={{width: '200px', height: '400px', border: '1px solid black', margin: '8px'}}>
            <h2>{name}</h2>
            <h3>{label}</h3>
            {options && options.map(option => <Option num={option}/>)}
        </div>
    )
}

export default Item;