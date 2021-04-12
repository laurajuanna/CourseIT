import React from 'react';
import {Link} from 'react-router-dom';

function MercadoLibre() {

    return (
        <div className="containerML">
            <div className="myApp appML">
                <Link to='/' className="btn btn-sm btn-secondary" style={{alignSelf: "flex-end"}}>
                    <span style={{marginRight: "0.5rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
                    </span>
                    Volver
                </Link>
                <div className="d-flex align-items-center" style={{minHeight: '75vh'}}>
                    <img style={{width: '249px'}} src="https://seeklogo.com/images/M/mercado-libre-logo-7848A94FE8-seeklogo.com.png" alt="Mercado Libre Logo" />
                    <ul className="listMl">
                        <li className="badgeMl">
                            <Link to='/carrousel/MLA' style={{textDecoration: 'none'}}>
                                <img style={{height: '16px', marginRight:'1rem', marginBottom: '2px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png' alt='Flag Argentina'/>
                                Argentina
                            </Link>
                        </li>
                        <li className="badgeMl">
                            <Link to='/carrousel/MBO' style={{textDecoration: 'none'}}>
                                <img style={{height: '18px', marginRight:'1rem', marginBottom: '2px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/1280px-Flag_of_Bolivia.svg.png' alt='Flag Bolivia'/>
                                Bolivia
                            </Link>
                        </li>
                        <li className="badgeMl">
                            <Link to='/carrousel/MLB' style={{textDecoration: 'none'}}>
                                <img style={{height: '18px', marginRight:'1rem', marginBottom: '2px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png' alt='Flag Brazil'/>
                                Brasil
                            </Link>
                        </li>
                        <li className="badgeMl">
                            <Link to='/carrousel/MCO' style={{textDecoration: 'none'}}>
                                <img style={{height: '18px', marginRight:'1rem', marginBottom: '2px'}} src='https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' alt='Flag Colombia'/>
                                Colombia
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MercadoLibre;
