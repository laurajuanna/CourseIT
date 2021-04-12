import React from 'react';

function Title(props) {

    const {title} = props;
    
    return (
        <h5 className="pt-3">{title ? title : "Soy un título"}</h5>
    )
}

export default Title;