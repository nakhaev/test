import React from "react";

const Option = props => {
    const { num } = props;
    const size = '20px';

    return (
        <div style={{width: size, height: size, border: '1px solid black', margin: '1px', display: 'inline-block'}}>
            { num }
        </div>
    )
}

export default Option;