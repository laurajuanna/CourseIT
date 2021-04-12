import React, { useState } from 'react';

function UseState() {

    const [counter, setCounter] = useState(0);

    function handleCounter(){
        // Así es mas simple
        // setCounter(counter + 1);
        // pero la forma de abajo es para asegurarnos
        // de que leemos el valor de counter actualizado
        setCounter((prevCounter) => prevCounter + 1);
    }

    return (
        <>
            <div className="form">
                <span>Contador: <span className="fw-bold">{counter}</span></span>
            </div>
            <button className="btn btn-sm btn-success text-light w-25 mb-2" onClick={handleCounter}>+1</button>
        </>
    )
}

export default UseState;