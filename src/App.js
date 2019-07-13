import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom' // пакет для роутинга 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {

  return (
    <BrowserRouter >
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.messagesPage} />} />
          <Route />
          <Route />
          <Route />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
