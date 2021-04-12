import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import Item from './Item';
import Nav from '../Navigation';
// Para el Swipe de imágenes 
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';

// Para íconos
import Icon from '../../../componentes/common/Icons'
import back from '../Carrousel/background.png';


function Carrousel() {

    const {site} = useParams(); 
    const [dataArg, setDataArg] = useState([]);
    const [mochilas, setMochilas] = useState([]);
    const [search, setSearch] = useState(null);
    const [searching, setSearching] = useState(false);
    const [sizeWidth, setSize] = useState(window.innerWidth - 18);


    useEffect(() => {
        fetchDataArg();
    }, [search]);
    
    async function fetchDataArg(){
        const getData = await fetch(`https://api.mercadolibre.com/sites/${site ? site : "MLA"}/search?q=${search ? search : 'running'}`);
        const getMochilas = await fetch(`https://api.mercadolibre.com/sites/${site ? site : "MLA"}/search?q=mochilas`);

        const dataToJson = await getData.json();
        const mochilasToJson = await getMochilas.json();

        setDataArg(dataToJson.results);
        setMochilas(mochilasToJson.results);
    }

    function handleCallback(data) {
        setSearch(data);
        setSearching(!searching);
    }

    SwiperCore.use([Navigation])

    // Forma de hacer eventListener en react
    window.addEventListener('resize', (event) => {
        setSize(window.innerWidth - 18);
    });

    const result = {fontSize: '26px', fontWeight: '600', lineHeight: '30px', textTransform: 'capitalize', marginLeft: '4px'}
    const lengthResult = {fontSize: '14px', lineHeight: '1.29', fontWeight: '300'}

    return (
        <div>
            <Nav callback={handleCallback} />
            <div className="containerML" style={{backgroundColor: '#ededed'}}>
                <div className="myApp appML" style={{backgroundColor: '#ededed'}}>
                    <img src={back} width={sizeWidth} alt='promotion' />
                    {search ?
                    <>
                        <div className='d-flex align-items-center justify-content-between w-100'>
                            <h3 style={result} className='mt-2'>
                                {search ? search : null} <span style={lengthResult}>{search ? dataArg.length+' resultados' : null}</span>
                            </h3>
                            <Link to='/' className="btn btn-sm btn-link" style={{alignSelf: "flex-end"}}>
                                <span style={{marginRight: "0.5rem"}}>
                                    <Icon type='arrowLeft' color='#035ada' size='18' />
                                </span>
                                Volver a Ejercicios
                            </Link>
                        </div>
                        <div className="d-flex align-items-start" style={{minHeight: '53vh'}}>
                            <div className="card-deck" style={{width: '55vw !important'}}>
                                <Swiper spaceBetween={230} slidesPerView={5} navigation className='containerSwiper' >
                                {dataArg.map((item, key) => {
                                    return <SwiperSlide key={key}><Item item={item} /></SwiperSlide>
                                })}
                                </Swiper>
                            </div>   
                        </div>
                    </> : 
                    <>
                        <div className='d-flex align-items-center justify-content-between w-100'>
                            <h3 className='lastVisit mt-2'>Basado en tu última visita</h3>
                            <Link to='/' className="btn btn-sm btn-link" style={{alignSelf: "flex-end"}}>
                                <span style={{marginRight: "0.5rem"}}>
                                    <Icon type='arrowLeft' color='#035ada' size='18' />
                                </span>
                                Volver a Ejercicios
                            </Link>
                        </div>
                        <div className="d-flex align-items-start" style={{minHeight: '53vh'}}>
                            <div className="card-deck" style={{width: '55vw !important'}}>
                                <Swiper spaceBetween={230} slidesPerView={5} navigation className='containerSwiper' >
                                {dataArg.map((item, key) => {
                                    return <SwiperSlide key={key}><Item item={item} /></SwiperSlide>
                                })}
                                </Swiper>
                            </div>   
                        </div>
                    </>}
                    <>
                        <h3 className='lastVisit'>Inspirado en tus favoritos</h3>
                        <div className="d-flex align-items-start" style={{minHeight: '53vh'}}>
                            <div className="card-deck" style={{width: '55vw !important'}}>
                                <Swiper spaceBetween={230} slidesPerView={5} navigation className='containerSwiper' >
                                {mochilas.map((item, key) => {
                                    return <SwiperSlide key={key}><Item item={item} /></SwiperSlide>
                                })}
                                </Swiper>
                            </div>   
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;
