import React from 'react';
import {Route} from 'react-router-dom' // пакет для роутинга 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.navbar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
          <Route path='/profile' render={ () => <Profile
            profilePage={props.state.profilePage} 
            dispatch={props.dispatch}/>
          }/>
          <Route />
          <Route />
          <Route />
        </div>
      </div>
  )
}

export default App;
