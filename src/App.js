import React from 'react';
import {Route} from 'react-router-dom' // пакет для роутинга 
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindFriendsContainer from './components/FindFriends/FindFriendsContainer'
import ScrollToTop from './components/Common/ScrollToTop/scrollToTop'
import Login from './components/Login/Login';
import VKPay from './components/VKPay/VKPay'
import {initializeApp} from './redux/app-reduser'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import Prealoader from './components/Common/Preloader/Preloader';

class App extends React.Component{
  componentDidMount(){
    this.props.initializeApp()
  }
  
  render(){
    if(!this.props.initialized){
      return <div className='preloader'>
        <Prealoader/>
      </div> 
    }
    
    return (
      <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <ScrollToTop >
              <Route path='/dialogs' render={ () => <DialogsContainer />} />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
              <Route path='/find-friends' render={ () => <FindFriendsContainer />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='/vkpay' render={() => <VKPay />} />
              <Route />
              <Route />
            </ScrollToTop>
          </div>
      </div>
    )
  } 
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default  compose(
  withRouter,
  (connect(mapStateToProps,{initializeApp})))(App);
