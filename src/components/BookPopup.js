import React from 'react';
import AddToCartButtons from './AddToCartButtons';

const BookPopup = (props) =>{
    return(
            <div className='bookPopupWrap' style={{display: props.style}}>
                <span onClick={props.togglePopup}>&#9668;</span>
                <div className='bookContent'>
                    <img src={props.info.image} alt='Book'/>
                    <div className='bookInfo'>
                        <h3>{props.info.title}</h3>
                        <h5>{props.info.subtitle}</h5>
                        <span>{props.info.price}$</span>
                        <a href={props.info.url}>Check it out in the market!</a>
                        <AddToCartButtons info={props.info}/>
                    </div>

                </div>
            </div>
    )
}

export default BookPopup;