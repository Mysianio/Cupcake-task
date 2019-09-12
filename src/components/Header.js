import React from 'react';
import '../styles/header.scss';
import Cart from './Cart.js';

const Header = () =>{
    return(
        <React.Fragment>
        <div id='wrapperBlock'></div>
        <div className='headerWrap'>
            <div className='header'>
                <h1>ITBook</h1>
                <Cart/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Header;