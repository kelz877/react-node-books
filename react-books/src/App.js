import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';




fetchBackEnd = async() => {
  const response = await fetch('/express_backend');
  const json = await response.json()
  return json
}













export default App;
