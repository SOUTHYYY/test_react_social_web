import { connect } from 'react-redux';
import Friends from './Friends'

let mapStateToProps = (state) => {
    return {
        mostPopularFriends: state.navbar.mostPopularFriends,
    }
}
const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer