import React,{ useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { useStateValue } from './components/StateProvider';
import { auth } from './components/firebase';

function App() {

  const [{ basket }, dispatch] = useStateValue();
  
  //useEffect -> runs based on a given condition
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user logged in...
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user logged out...
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    return()=>{
      //in order to prevent refresh/rerendering
      unsubscribe();  
    }
  },[])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'><Header/><Checkout/></Route>
          <Route path='/login'><Login/></Route>
          <Route path='/'><Header/><Home/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
