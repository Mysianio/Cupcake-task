import React, {useState, useEffect}from 'react';
import {connect} from 'react-redux';
import {getGoods} from '../actions/getGoods.js';
import Book from './Book.js';
import '../styles/book.scss';
import loader from '../img/load.gif';

const Loader = (props) =>{

    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=>{
        props.onGetGoods('http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books');
    },[])

    useEffect(()=>{
        setIsFetching(props.goods.isFetching)
    }, [props])
    if(isFetching){
        return(
            <div id='loading'>
                <img src={loader} alt='Loading...'/>
                <h3>Loading goods...</h3>
            </div>
        )
    }else{
        let list = props.goods.data.books.map((item, index)=>{
            return <Book key={index} info={item}/>
        })
        return(
            <div className='bookWrap'>
                {list}
            </div>
    )
    }
}

export default connect(
    state =>({
        goods: state.goods
    }),
    dispatch =>({
        onGetGoods: (url) =>{
            dispatch(getGoods(url))
        }
    })
)(Loader);