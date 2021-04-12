import React from 'react';

function Text(props){

    const {content} = props;
    return (
        <p className='pb-3'>{content ? content : "Soy un párrafo"}</p>
    )
}

export default Text;