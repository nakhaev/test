import React from "react";

const Option = props => {
    const { value, active, clickHandler } = props;
    const size = '20px';

    return (
        <div 
            style={{width: size, height: size, border: '1px solid black', margin: '1px', display: 'inline-block', background: active ? 'red' : '#fff'}}
            onClick={() => clickHandler(value)}
            >
            { value }
        </div>
    )
}

export default Option;