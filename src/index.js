require('file-loader?name=[name].[ext]!./index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'


const top = document.getElementById('top');
const bottom = document.getElementById('bottom');
ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  top
);

ReactDOM.render(
  <React.StrictMode>
    <Content />
    <Footer />
  </React.StrictMode>,
  bottom
);
