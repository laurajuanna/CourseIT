import React, { useState } from 'react';

function Eventos() {

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    function handleClick(){
        setMessage("Soy un mensaje actualizado.")
    }

    function handleUser(){
        if (name !== "" || surname !== "") {
            setMessage(`Hola ${name} ${surname}!`);
            setName("");
            setSurname("");
        } else {
            setMessage(`Hola Anonimo!`)
        }
    }

    function handleName(e){
        // Lo siguiente es la forma fácil de obtener el value
        // console.log(e.target.value)
        // lo siguiente es desestructurando el objeto
        const { value } = e.target;
        setName(value)
    }

    function handleSurname(e){
        // Lo siguiente es la forma fácil de obtener el value
        // console.log(e.target.value)
        // lo siguiente es desestructurando el objeto
        const { value } = e.target;
        setSurname(value)
    }

    return (
        <>
            <div className="form">
                <span>El valor del estado es: <span className="fw-bold">{message}</span></span>
            </div>
            <button className="btn btn-sm btn-secondary text-light w-25" onClick={handleClick}>Actualizar!</button>
            <div className="form">
                <label>Nombre</label>
                <input className="form-control form-control-sm w-25" value={name} autoComplete="off" type="text" name="name" onChange={handleName}></input>
            </div>
            <div className="form">
                <label>Apellido</label>
                <input className="form-control form-control-sm w-25" value={surname} autoComplete="off" type="text" name="surname" onChange={handleSurname}></input>
            </div>
            <button className="btn btn-sm btn-secondary text-light w-25 mt-1 mb-3" onClick={handleUser}>Actualizar nombre</button>
        </>
    )
}

export default Eventos;