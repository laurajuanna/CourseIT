import React, {useState} from 'react';
import swal from 'sweetalert';

function Item(props) {

    const [hover, setHover] = useState(false);
    const item = props.item;

    function Zoom() {
        setHover(!hover);
    }

    function Out() {
        setHover(!hover);
    }

    const discount = {display: 'flex', fontSize: '14px', fontWeight: '400', lineHeight: '1', color: '#00a650'}
    const disabledPrice = {color:' #999', fontSize: "12px", textDecoration: 'line-through'}

    return (
        <div onMouseOver={Zoom} onMouseOut={Out} className="card itemCard" style={{width: '230px', margin:'5px'}}>
            <a href={item.permalink}>
                <img className="card-img-top itemImage" src={item.thumbnail} alt={item.title} />
            </a>
            <div className="card-body" style={{borderTop: '1px solid #eaeaea'}}>
                <span title="Envío gratuíto" className={item.shipping.free_shipping ? "truck" : "truck none"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </span>
                <div className='d-flex'>
                    <h5 className="card-title price">{`$ ${item.price}`}</h5>
                    {item.original_price?
                    <span className='d-flex align-items-center'>
                        <span style={disabledPrice} className='mx-1'>${item.original_price}</span>
                        <span style={discount}>40% OFF</span>
                    </span> : null }
                </div>
                <p className={hover ? "card-text description" : "card-text description none" }>{item.title}</p>
            </div>
        </div>
    )
}

export default Item;
