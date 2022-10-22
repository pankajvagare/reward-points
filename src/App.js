import React from 'react';
import './App.css';
import Footer from './components/atoms/Footer';
import Header from './components/atoms/Header';
import Transcations from './pages/transcations';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Transcations></Transcations>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default App;
