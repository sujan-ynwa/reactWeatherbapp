import React, { useEffect, useState} from 'react';
import './App.css';
import SearchFrom from './searchForm';
import HookCounter from './hookCounter';



const App = () => {

    // this is basically for html stuffs
    return ( 
        <div>
            <div className="header">
                <h1>Find your weather today!!</h1>
            {/* <HookCounter />*/}
             </div>
            <div>
                <SearchFrom />
            </div>   
         </div>
      );
    }
    
    export default App;
