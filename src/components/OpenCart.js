import React, {useEffect, useState} from 'react';
import '../styles/cart.scss';
import {connect} from 'react-redux';
import OpenCartElement from './OpenCartElement.js';

const OpenCart = (props) =>{

    const [list , setList] = useState();

    useEffect(()=>{
        if(props.cart.goodInfo.length !== 0){
            setList(props.cart.goodInfo.map((item, index) =>{
                return <OpenCartElement key={index} info={item} />
            }))
        }else{
            setList('Chart is empty')
        }
    },[props.cart.goodInfo])

    if(list === 'Chart is empty'){
        return(
            <div style={{marginTop: props.style + 'px'}} className='openCartWrap'>
                <h2 id='emptyCart'>{list}</h2>
            </div>
        )
    }else{
        return(
            <div style={{marginTop: props.style + 'px'}} className='openCartWrap'>
                    {list}
            </div>
        )
    }
}

export default connect(
    state =>({
        cart: state.cart
    }),
    dispatch =>({

    })
)(OpenCart);