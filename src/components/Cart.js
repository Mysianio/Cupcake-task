import React, {useState} from 'react';
import {connect} from 'react-redux';
import shoppingCart from '../img/shoppingCart.png';
import OpenCart from './OpenCart.js';
import '../styles/header.scss';

const Cart = (props) =>{

    const [cartIsOpened, setCartIsOpened] = useState('-200');

    let cartVal;
    if(props.cart > 99){
        cartVal = '+99';
    }else{
        cartVal = props.cart;
    }
    const toggleCart = () =>{
        if(cartIsOpened === '-200'){
            setCartIsOpened('180');
        }else{
            setCartIsOpened('-200');
        }
    }
    return(
        <React.Fragment>
            <div className='cart' onClick={toggleCart}>
                <span>{cartVal}</span>
             <img src={shoppingCart} alt='Shopping cart' draggable='false'/>
            </div>
            <OpenCart style={cartIsOpened}/>
        </React.Fragment>
    )
}

export default connect(
    state =>({
        cart: state.cart.totalAmount
    }),
    sipatch =>({

    })
)(Cart);