import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import navbarReduser from "./navbar-reduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 3, message: "Я в лазурном", likesCount: 1 },
                { id: 2, message: "It's my first post", likesCount: 15 },
                { id: 1, message: "Hello everybody", likesCount: 3 },
            ],
            newPostText: '',
            postAuthor: 'Лаптырев Алексей',
        },
        messagesPage: {
            dialogs: [
                { id: 1, name: 'Ваня', image: 'https://pp.userapi.com/c845521/v845521223/20e9a5/O_d5pGfrUCI.jpg?ava=1' },
                { id: 2, name: 'Аня', image: 'https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1' },
                { id: 3, name: 'Дима', image: 'https://pp.userapi.com/c851332/v851332975/17e82b/yfLpC4dSYVs.jpg?ava=1' },
                { id: 4, name: 'Дамир', image: 'https://pp.userapi.com/c849420/v849420420/1cc868/UIcCjAEAz4M.jpg' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are u?' },
                { id: 3, message: 'Heeey....' }
            ],
            newMessageText: '',
        },
        navbar: {
            mostPopularFriends: [
                { id: 1, name: 'Ваня', image: 'https://pp.userapi.com/c845521/v845521223/20e9a5/O_d5pGfrUCI.jpg?ava=1' },
                { id: 2, name: 'Аня', image: 'https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1' },
                { id: 3, name: 'Дамир', image: 'https://pp.userapi.com/c849420/v849420420/1cc868/UIcCjAEAz4M.jpg' },
            ]
        }
    },
    _callSubscriber(state) {
        console.log('state changed' + state)
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель (observer) // publisher-subscriber
    },


    // _addPost() {
    //     let newPost = {
    //         id: this._state.profilePage.posts.length + 1,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.unshift(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    // },
    // _updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    // },
    // _updateNewMessageText(newText) {
    //     this._state.messagesPage.newMessageText = newText
    //     this._callSubscriber(this._state)
    // },
    // _sendMessage(){
    //     let newMessage = {
    //         id: this._state.messagesPage.messages.length + 1,
    //         message: this._state.messagesPage.newMessageText
    //     }
    //     this._state.messagesPage.messages.push(newMessage)
    //     this._state.messagesPage.newMessageText = ''
    //     this._callSubscriber(this._state)
    // },


    dispatch(action) {

        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.messagesPage = dialogsReduser(this._state.messagesPage, action)
        this._state.navbar = navbarReduser(this._state.navbar, action)

        this._callSubscriber(this._state)
    },

}

export default store
window.store = store