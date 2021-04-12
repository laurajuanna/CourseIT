import React, { useState } from 'react';
import Icon from '../../../componentes/common/Icons'

function Nav(props) {

    const [resize, setResize] = useState(false);
    const [collapse, setCollapse] = useState(false)
    const [valueSearch, setValueSearch] = useState("");

    // Forma de hacer eventListener en react
    window.addEventListener('resize', (event) => {
        updateDimensions();
    });

    function expandNav(){
        setCollapse(!collapse)
    }

    function updateDimensions() {
        if (window.innerWidth < 991) {
            setResize(!resize)
        }
        // Si la ventana está en pantalla grande y el collapse sigue con el state 'abierto' lo cierra
        if (window.innerWidth > 991 & collapse === true) {
            setCollapse(!collapse);
            setResize(!resize)
        }
    }

    function handleChange(e) {
        const { value } = e.target;
        setValueSearch(value);
    }

    function keyPress(e){
        if(e.keyCode === 13){
           handleClick()
        }
     }

    function handleClick() {
        props.callback(valueSearch);
        setValueSearch('')
    }

    const navCollapse = 'collapse navbar-collapse d-flex flex-column justify-content-around align-items-center mt-3 collapse show';
    const navNotCollapse = 'collapse navbar-collapse justify-content-around align-items-center mx-4';
    const classButtonCollapse = 'collapsed navbar-toggler w-100 d-flex justify-content-between';
    const classButtonNotCollapse = 'navbar-toggler w-100 d-flex justify-content-between';

    return (
        <nav className="navbar navbar-expand-lg navbar-light navML">
            <div className="container-fluid">
                {resize ?
                <button onClick={expandNav} style={{outline: 'none', border: 'none'}} className={collapse? classButtonCollapse : classButtonNotCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={collapse} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <a className="navbar-brand p-0 m-0" href="/desafio">                
                        <img style={{height: '34px'}} src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png" alt="Mercado Libre Logo" />
                    </a>
                </button> : null}
                <div className={collapse ? navCollapse : navNotCollapse}>
                    {!resize ?
                    <a className="navbar-brand p-0" href="/desafio">                
                        <img style={{height: '34px'}} src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png" alt="Mercado Libre Logo" />
                    </a> : null}
                    <div className={collapse? "d-flex mt-0 mb-2 w-100" : "d-flex w-50 mr-4"}>
                        <input className="form-control me-2" onChange={handleChange} onKeyDown={keyPress} value={valueSearch} type="search" placeholder="Buscar productos, marcas y mas..." aria-label="Search"/>
                        <button className="btn btn-sm" type='submit' onClick={handleClick}>
                            <Icon type='search' color='gray' size='16' />
                        </button>
                    </div>
                    <p className="m-0" style={{cursor: 'default'}}>
                        <span style={{marginRight: '0.5rem', marginBottom: '2px'}}>
                            <Icon type='creditCard' size='18' />
                        </span>
                        Comprá hoy y pagá después</p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
