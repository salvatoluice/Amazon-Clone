import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import { auth } from '../src/components/firebase'
import { useStateValue } from './components/Stateprovider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is authenticated', authUser)

      if (authUser) {
        //user is authenticated

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //user is not authenticated

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }) 
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path='/checkout' element={[<Header />,<Checkout />]}/>
        <Route path='/' element={[<Header />,<Home />]}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
