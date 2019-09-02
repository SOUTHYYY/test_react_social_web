import React from 'react';
import {Route} from 'react-router-dom' // пакет для роутинга 
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindFriendsContainer from './components/FindFriends/FindFriendsContainer'

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/profile' render={ () => <Profile />}/>
          <Route path='/find-friends' render={ () => <FindFriendsContainer />} />
          <Route />
          <Route />
          <Route />
        </div>
      </div>
  )
}

export default App;
