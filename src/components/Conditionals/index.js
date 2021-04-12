import React, { useState } from 'react';
import logo from './logoBasic.svg';

function Conditionals() {

    const [age, setAge] = useState(0);
    const [inputNumber, setInputNumber] = useState("");
    const [arrNumeros, setArrNumeros] = useState([]);
    const frutas = ['banana', 'manzana', 'melón', 'naranja', 'uvas']
    const [showImage, setShowImage] = useState(false);

    function handleAge(e) {
        const { valueAsNumber } = e.target;
        setAge(valueAsNumber);
    }

    function handleChange(e) {
        const { valueAsNumber } = e.target;
        setInputNumber(valueAsNumber);
    }

    function handleClick() {

        /* el ... del inicio es el spread Operator,
           lo que hace es clonar el array existente y luego agregar el siguiente valor,
           basicamente lo que antiguamente haciamos con el push en los arrays
        */
        if (inputNumber !== "") {
            const newArr = [...arrNumeros, inputNumber];
            setArrNumeros(newArr);
            setInputNumber("");    
        }        
    }

    function handleImage(){
        setShowImage(!showImage);
    }

    return (
        <div className="form">
            <h5>Condicionales</h5>
            <h6>Edad</h6>
            <input type="number" onChange={handleAge} className="form-control form-control-sm w-25" autoComplete="off" />    
            {age ? (
                <div className="mt-2">
                {age >= 18 ? 
                    <h6>Sos mayor de edad.</h6> :
                    <h6>Sos menor de edad.</h6>}
                </div>
            ) : null}
            <h5 className="mt-2">Bucles</h5>
            <h6>Insertar número</h6>
            <input type="number" onChange={handleChange} value={inputNumber} className="form-control form-control-sm w-25" autoComplete="off" />
            <button className="btn btn-sm btn-primary text-light w-25 mt-1" onClick={handleClick}>Agregar al array</button>
            <ul className="mt-2 px-3">
            {arrNumeros.map((num, key) => {
                return <li key={key}>{num}</li>
            })}
            </ul>
            <h5 className="mt-2">Ejercicios adicionales</h5>
            <h6 className="mt-2">Mapear array</h6>
            <ul className="mt-2 px-3">
            {frutas.map((fruta, key) => {
                return <li key={key}>{fruta}</li>
            })}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="mt-2">Mostrar imagen segun Bool en state</h5>
                    <div>
                        <button className="btn btn-sm btn-primary text-light w-100 mt-1" onClick={handleImage}>{showImage? "Ocultar imagen" : "Mostrar imagen"}</button>
                    </div>
                </div>
                <div>
                    {showImage && <img src={logo} alt="logo" width="75px" />}
                </div>
            </div>
        </div>
    )
}

export default Conditionals;
