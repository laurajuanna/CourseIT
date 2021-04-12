import React from 'react'

function Child(props) {

    function handleClick() {
        props.callback('Info de prueba');
    }
    return (
        <div>
            <button className="btn btn-sm btn-success text-light w-25 mt-2" onClick={handleClick}>Disparar callback</button>            
        </div>
    )
}

export default Child
