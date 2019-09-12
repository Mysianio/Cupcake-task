import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';

const AddToCartButtons = (props) =>{
    const [active, setActive] = useState(false);
    const [style, setStyle] = useState('');
    const [value, setValue] = useState(1);

    useEffect(()=>{
        if(props.isActive[0] !== undefined){
            for(let i = 0; i < props.isActive.length; i++){
                if (props.isActive[i].good.isbn13 !== props.info.isbn13){
                    setActive(false);
                }else{
                    setActive(true);
                    setValue(props.isActive[i].value);
                    break;
                }
            }
        }else{
            setActive(false);
        }
        
    },[props])

    useEffect(()=>{
        if(active){
            setStyle('active');
        }else{
            setStyle('');
        }
    },[active]);

    const addToCart = () =>{
        if(!active){
            props.onAddToCart(value+Number(props.cart), props.info, value);
            
        }else{
            props.onAddToCart((Number(props.cart)-value), props.info, value);
            setActive(false);
        }
    }
    const onHandleChange = (e) =>{
        if(!isNaN(Number(e.target.value)) && Number(e.target.value) > 0){
            setValue(Number(e.target.value));
            
        }
    }
    const addMoreToCart = () =>{
        if(value < 99 && !active){
            setValue(value+1);
        }
    }
    const addLessToCart = () =>{
        if(value > 1 && !active){
            setValue(value-1);
        }
    }
    return(
        <React.Fragment>
        <div className='amountOfGoods'>
            <span onClick={addLessToCart}>&#9668;</span><input disabled={active} onChange={onHandleChange} maxLength='2' value={value}/><span onClick={addMoreToCart}>&#9658;</span>
        </div>
        <input className='addToCart' id={style} type='submit' onClick={addToCart} value={active ? 'Added to chart':'Add to chart'}/>
        </React.Fragment>
    )
}

export default connect(
    state =>({
        cart: state.cart.totalAmount,
        isActive: state.cart.goodInfo
    }),
    dispatch =>({
        onAddToCart: (totalValue, good, value) =>{
            dispatch({type: "ADD_TO_CART", amount: totalValue, goodInfo: {good, value}})
        }
    })
)(AddToCartButtons);