import React from 'react';
import {Route} from 'react-router-dom' // пакет для роутинга 
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindFriendsContainer from './components/FindFriends/FindFriendsContainer'
import ScrollToTop from './components/Common/ScrollToTop/scrollToTop'

const App = (props) => {

  return (
      <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <ScrollToTop >
              <Route path='/dialogs' render={ () => <DialogsContainer />} />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
              <Route path='/find-friends' render={ () => <FindFriendsContainer />} />
              <Route />
              <Route />
              <Route />
            </ScrollToTop>
          </div>
      </div>
  )
}

export default App;
