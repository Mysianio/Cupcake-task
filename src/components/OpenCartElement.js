import React from 'react';

const OpenCrtElement = (props) =>{
    return(
        <div className='openCartElement' onClick={() =>{window.location.href=props.info.good.url}}>
            <img src={props.info.good.image} alt='Book'/>
            <h5>{props.info.good.title}</h5>
            <span>{props.info.good.price}$</span>
            <span className='totalValue'>{props.info.value}</span>
        </div>
    )
}

export default OpenCrtElement;