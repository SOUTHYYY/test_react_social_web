const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReduser = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        
        default: 
            return state
    }  
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReduser