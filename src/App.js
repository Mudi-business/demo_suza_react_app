import './App.css';
import React from 'react';
import Home from './views/Home';
import MainLayout from './views/MainLayout';
//nimetengeneza class inaitwa App alfu nikarithi
//tabia za class ya React

export default class App extends React.Component{
  render(){

    //built method from React.component class
    //lazima tu return function ili kuweza kuziita
    //static files zetu 
    return (
     <MainLayout />
    )
  }
}


