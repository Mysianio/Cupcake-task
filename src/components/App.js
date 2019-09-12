import React from 'react';
import Loader from './Loader.js';
import '../index.scss';
import Header from './Header.js';

const App = () =>{
    return(
        <React.Fragment>
        <Header/>
        <div className='wrapper'>
            <Loader/>
        </div>
        </React.Fragment>
    )
}

export default App;