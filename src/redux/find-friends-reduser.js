const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        { id: '1', followed: false, image: 'https://sun9-50.userapi.com/c850636/v850636040/1332d7/1GkYahSrBMw.jpg?ava=1', fullName: 'Александр Новиков', status: 'online', location: {city: "Nizhny Novgorod",
        country: 'Russia'} },
        { id: '2', followed: true, image: 'https://sun9-17.userapi.com/c854024/v854024207/a802f/14-FonzBuQs.jpg?ava=1', fullName: 'Лера Абрамова', status: 'offline', location: {city: "Nizhny Novgorod",
        country: 'Russia'} },
        { id: '3', followed: false, image: 'https://sun9-42.userapi.com/c858224/v858224520/551f9/tMTEpcD_0FY.jpg?ava=1', fullName: 'Валентин Касницкий', status: 'online', location: {city: "Nizhny Novgorod",
        country: 'Russia'} },
        { id: '4', followed: true,  image: 'https://sun9-6.userapi.com/c851120/v851120356/17c43c/__hlNrKnkOY.jpg', fullName: 'Кристиан гришин', status: 'online', location: {city: "Vyksa",
        country: 'Russia'} },
        
    ]
}


const findFriendsReduser = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                       return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

            

        default:
            return state
    }

}

export const followActionCreator = (userId) => ( {type: FOLLOW, userId} )
export const unfollowActionCreator = (userId) => ( {type: UNFOLLOW, userId} )
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


export default findFriendsReduser