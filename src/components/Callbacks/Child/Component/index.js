import React, {useState, useEffect} from 'react'

function Component(props) {

    const [number, setNumber] = useState(0);
    const [classColor, setClassColor] = useState(false);
    
    useEffect(() => {
        const num = Math.floor(Math.random() * (11 - 1) + 1);
        setNumber(num);
    }, [])

    function generateRandom(){
        setClassColor(!classColor)
        props.sendInfo({
            number: number,
            title: props.title
        })
    }

    return (
        <div className="callback m-2">
            <h5>Componente {props.title}</h5>
            <p className='mb-2'>Número aleatorio: {number > 0 ? number : "..."}</p>      
            <button className={classColor ? "btn btn-sm btn-success text-light" : "btn btn-sm btn-secondary text-light"} onClick={generateRandom}>
                Enviar Número {props.title}
            </button>           
        </div>
    )
}

export default Component;
