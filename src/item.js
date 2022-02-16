import React, { useState } from "react";
import Option from "./option";

const Item = props => {
    const {name, label} = props;


    const [options, setOptions]= useState([
        {value: 1, active: false},
        {value: 2, active: false},
        {value: 3, active: false},
        {value: 4, active: false},
        {value: 5, active: false},
    ]);

    const handleClick = (val) => {
        console.log('click', val);
        let opt = [ ...options];
        opt = opt.map(item => {
            item.active = val === item.value;
            return item;
        });
        setOptions(opt);
    }

    return (
        <div style={{width: '200px', height: '400px', border: '1px solid black', margin: '8px'}}>
            <h2>{name}</h2>
            <h3>{label}</h3>
            {options && options.map(option => <Option clickHandler={handleClick} key={option.value} { ...option}/>)}
        </div>
    )
}

export default Item;