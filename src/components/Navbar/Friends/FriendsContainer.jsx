import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        mostPopularFriends: state.navbar.mostPopularFriends,
        huy: '123144'
    }
}
const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer