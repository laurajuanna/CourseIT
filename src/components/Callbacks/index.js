import React, {useState} from 'react'
import Child from './Child';
import Component from './Child/Component';

function Callback() {
    const [title, setTitle] = useState("");
    const [components, setComponents] = useState([]);

    //Ejercicio del video
    function handleCallback(data) {
        alert(data);
    }

    //función que pasamos por props
    function handleTitle(data) {
        const newArr = [...components, data];
        setComponents(newArr);
        if (components.length === 2) {
            if (components[0].number > components[1].number) {
                setTitle(components[0].title);
            } 
            if (components[0].number < components[1].number) {
                setTitle(components[1].title);
            } 
            if (components[0].number === components[1].number) {
                setTitle("equal");
            } 
        }        
    }

    //función para refrescar
    function refresh(){
        window.location.reload(true);
    }

    return (
        <div className="d-flex flex-column">
            <div>
                <div>
                    <Child callback={handleCallback} />            
                </div>
                <h5 className="mt-2">Ejercicios adicionales</h5>
                <ul>
                    <li>Crear un componente que reciba una prop llamada sendInfo y dentro renderice un título y un número aleatorio entre 1 y 10.</li>
                    <li>Llamar a nuestro componente desde App.js dos veces.</li>
                    <li>Utilizando callbacks calcular que componente tiene el mayor número y mostrar en App.js la leyenda 'El componente [titulo del componente] tiene el mayor número'.</li>
                </ul>   
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex align-items-center justify-content-center">       
                    <Component title="A" sendInfo={handleTitle} /> 
                    <Component title="B" sendInfo={handleTitle} />  
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <div>
                        {title ? 
                            title === "equal" ? <h5 className="text-center mt-2">Los componentes son iguales.</h5> : 
                            <h5 className="text-center mt-2">El componente "{title}"<br/>tiene el mayor número.</h5> :
                            <span style={{color: 'red'}}>* Envíe los números y seleccione comparar.</span>}
                    </div>
                    <div>
                        <button className="btn btn-sm btn-success text-light m-1" onClick={handleTitle}>Comparar</button>
                        <button className="btn btn-sm btn-success text-light m-1" onClick={refresh}>Reiniciar</button>  
                    </div>          
                </div>
            </div>
        </div>
    )
}

export default Callback;
