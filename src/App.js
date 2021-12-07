import React, {useState} from 'react';
import './App.css';
import './Styles.css';
import Blog from './components/Blog';
import Eventos from './components/Events';
import UseState from './components/UseState';
import Conditionals from './components/Conditionals';
import Callback from './components/Callbacks';
import UseEffect from './components/UseEffect';
import {Link} from 'react-router-dom';
import Icon from './componentes/common/Icons';
import {Collapse} from 'reactstrap';

function App() {

  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [openD, setOpenD] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openF, setOpenF] = useState(false);
  const [openG, setOpenG] = useState(false);
  const [openH, setOpenH] = useState(false);
  const [openI, setOpenI] = useState(false);
  const [openJ, setOpenJ] = useState(false);

  const toggleA = () => setOpenA(!openA);
  const toggleB = () => setOpenB(!openB);
  const toggleC = () => setOpenC(!openC);
  const toggleD = () => setOpenD(!openD);
  const toggleE = () => setOpenE(!openE);
  const toggleF = () => setOpenF(!openF);
  const toggleG = () => setOpenG(!openG);
  const toggleH = () => setOpenH(!openH);
  const toggleI = () => setOpenI(!openI);
  const toggleJ = () => setOpenJ(!openJ);

  const toggleStyle = 'd-flex justify-content-between align-items-center py-1'
  const caretColor = '#6c757d';
  

  return (
    <div className="container">

      <div className="myApp">

        <div className='d-flex flex-column align-items-center justify-content-center' style={{alignSelf: 'center'}}>
          <h3 className='text-success'>Prácticas de React.js para CourseIT</h3>
          <a href="https://courseit.io/">Visitá CourseIT</a>
        </div>
        
        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleA}>
            <h4 className='m-0'>Componentes</h4>
            <Icon type={openA ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>          
          <Collapse isOpen={openA}>
            <Blog />
            <Blog />
          </Collapse>
        </div>
        
        <hr class="w-100 my-1"/>
        
        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleB}>
            <h4 className='m-0'>Eventos en JSX</h4>
            <Icon type={openB ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openB}>
            <Eventos />
          </Collapse>
        </div>

        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleC}>
            <h4 className='m-0'>Hook UseState</h4>
            <Icon type={openC ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openC}>
            <UseState />
          </Collapse>
        </div> 

        <hr class="w-100 my-1"/>
        {/* prueba repo */}
        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleD}>
            <h4 className='m-0'>Condicionales y Bucles en JSX</h4>
            <Icon type={openD ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openD}>
            <Conditionals />
          </Collapse>
        </div>  

        <hr class="w-100 my-1"/>
        
        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleE}>
            <h4 className='m-0'>Props</h4>
            <Icon type={openE ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openE}>
            <Blog title="Curso React en CourseIt" content="Este es un párrafo donde contamos de qué va a tratar el curso de React en CourseIt."/>
            <Blog title="Otro título" content="Otro contenido."/>
          </Collapse>
        </div> 

        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleF}>
            <h4 className='m-0'>Callbacks (+useEffect)</h4>
            <Icon type={openF ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openF}>
            <Callback />
          </Collapse>
        </div>

        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleG}>
            <h4 className='m-0'>Hook UseEffect</h4>
            <Icon type={openG ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openG}>
            <UseEffect />
          </Collapse>
        </div>  

        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleH}>
            <h4 className='m-0'>Probando React Router Dom</h4>
            <Icon type={openH ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openH}>
            <div style={{width: "auto"}}>
            <p>La diferencia de usar un 'a' es que el Link del React Router Dom hace un clientside render y solo va a traer la info que necesite, no va a renderizar todo el html nuevamente.</p>
            <Link to='/about' className="btn btn-sm btn-primary mb-3" style={{width: 'fit-content'}}>
              Ir al About
              <span style={{marginLeft: "0.3rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
              </span>              
            </Link>
            </div>
          </Collapse>
        </div>
        
        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleI}>
            <h4 className='m-0'>Probando Rutas Dinámicas</h4>
            <Icon type={openI ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openI}>
            <div style={{width: "auto"}}>
              <p>Para manejar rutas dinamicas tenemos que configurar el dinamismo de las mismas en el componente en la props path utilizando el caracter <span style={{fontWeight: 'bold'}}>:</span> en donde :id va a ser la parte dinamica de nuestra ruta.
              <br/>Fuera de eso para poder levantar ese valor en nuestro componente Product vamos a tener que utilizar el hook useParams que nos regala la libreria react-router-dom.</p>
              <h5>Links a los distintos "productos"</h5>
              <div className="btn-group w-25 pb-3" role="group">
                <Link to='/products/1' className="btn btn-sm btn-outline-primary">
                  1           
                </Link>
                <Link to='/products/2' className="btn btn-sm btn-outline-primary">
                  2          
                </Link>
                <Link to='/products/3' className="btn btn-sm btn-outline-primary">
                  3          
                </Link>
                <Link to='/products/4' className="btn btn-sm btn-outline-primary">
                  4           
                </Link>
              </div>
            </div>
          </Collapse>
        </div>
        
        <hr class="w-100 my-1"/>

        <div className="section my-0">
          <div className={toggleStyle} onClick={toggleJ}>
            <h4 className='m-0'>Desafío Routing</h4>
            <Icon type={openJ ? 'caretUp' : 'caretDown'} color={caretColor} />
          </div>
          <Collapse isOpen={openJ}>
            <p>Usar la API de Mercado Libre para replicar el routing de productos.</p>
            <Link to='/desafio' className="btn btn-sm btn-primary" style={{width: 'fit-content'}}>
                Ir al Desafío
                <span style={{marginLeft: "0.3rem"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>
                </span>              
            </Link>
          </Collapse>
        </div>

      </div> 

    </div>
        
  );
}

export default App;
