// Usando los iconos de bootstrap
//https://icons.getbootstrap.com/
// Invocamos al componente indicando las siguientes props
// Todas son opcionales salvo type
// <Icon type='arrowLeft' color='white' class='text-success' size='20' />

import React from 'react';

export default function Icon(props){   
    let icon;

    let bsClass = props.class;
    let size = props.size;
    let color = props.color;

    switch (props.type) {
        case "caretDown":
            icon =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color ? color : "currentColor"} className={`bi bi-caret-down-fill ${bsClass}`} viewBox="0 0 16 16" style={{color: color ? color : null}}>
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
            break;
        case "caretUp":
            icon =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color ? color : "currentColor"} className={`bi bi-caret-up-fill ${bsClass}`} viewBox="0 0 16 16" style={{color: color ? color : null}}>
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                    </svg>
            break;
        case "arrowLeft":
            icon =  <svg xmlns="http://www.w3.org/2000/svg" width={size ? size : '16'} height={size ? size : '16'} fill="currentColor" className={`bi bi-arrow-left-short ${bsClass}`} viewBox="0 0 16 16" style={{color: color ? color : null}}>
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
            break;
        case "creditCard":
            icon =  <svg xmlns="http://www.w3.org/2000/svg" width={size ? size : '16'} height={size ? size : '16'} fill="currentColor" className={`bi bi-credit-card ${bsClass}`} viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"/>
                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"/>
                    </svg>
            break;
        case "search":
            icon =  <svg xmlns="http://www.w3.org/2000/svg" width={size ? size : '16'} height={size ? size : '16'} fill="currentColor" className={`bi bi-search ${bsClass}`} viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
            break;
        default:
            icon =  <svg width={size ? size : '16'} height={size ? size : '16'} viewBox="0 0 16 16" className={`bi bi-code-slash ${bsClass}`}  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
            break;
    }
    
    return (
        <>
            {icon}
        </>
    )
}