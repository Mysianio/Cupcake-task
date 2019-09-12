import React, {useState} from 'react';
import BookPopup from './BookPopup';
import AddToCartButtons from './AddToCartButtons';

const Book = (props) =>{
    const [popup, setPopup] = useState('none');
    

    const togglePopup = () =>{
        if(popup === 'none'){
            setPopup('flex')
            document.body.style.overflowY = 'hidden';
        }else{
            setPopup('none')
            document.body.style.overflowY = 'scroll';
        }
    }
    return(
        <React.Fragment>
        <BookPopup info={props.info} style={popup} togglePopup={togglePopup}/>
        <div className='book'>
            <div className='bookInfo' onClick={togglePopup}>
                <img src={props.info.image} draggable='false' alt='' />
                <span>{props.info.price}$</span>
                <h3>{props.info.title}</h3>
                <h5>{props.info.subtitle}</h5>
            </div>
            <AddToCartButtons info={props.info}/>
        </div>
        </React.Fragment>
    )
}

export default Book;