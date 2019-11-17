const SEND_MESSAGE = 'SEND-MESSAGE'
const FULL_MODE = 'FULL_MODE'
const GET_CURRENT_USER_ID = 'GET_CURRENT_USER_ID'

let initialState = {
    dialogs: [
        {
            id: 1, name: 'Ваня Демуцкий', image: 'https://pp.userapi.com/c845521/v845521223/20e9a5/O_d5pGfrUCI.jpg?ava=1', messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are u?' },
                { id: 3, message: 'Heeey....' },
                { id: 1, message: 'Hi' },
            ]
        },
        {
            id: 2, name: 'Аня Ковалева', image: 'https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1', messages: [
                { id: 1, message: 'Бывшие пидорасы' },
                { id: 2, message: 'Я их рот ебала' },
                { id: 3, message: 'Шоб мне еще такие как он попадались...' },
                { id: 1, message: 'ХАЙ КСТА' },]
        },
        { id: 3, name: 'Дима Лемавский', image: 'https://pp.userapi.com/c851332/v851332975/17e82b/yfLpC4dSYVs.jpg?ava=1', messages: [] },
        { id: 4, name: 'Дамир Малеков', image: 'https://pp.userapi.com/c849420/v849420420/1cc868/UIcCjAEAz4M.jpg', messages: [] },
        { id: 5, name: 'Ваня Демуцкий', image: 'https://pp.userapi.com/c845521/v845521223/20e9a5/O_d5pGfrUCI.jpg?ava=1', messages: [] },
        { id: 6, name: 'Аня Ковалева', image: 'https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1', messages: [] },
        { id: 7, name: 'Дима Лемавский', image: 'https://pp.userapi.com/c851332/v851332975/17e82b/yfLpC4dSYVs.jpg?ava=1', messages: [] },
        { id: 8, name: 'Дамир Малеков', image: 'https://pp.userapi.com/c849420/v849420420/1cc868/UIcCjAEAz4M.jpg', messages: [] },
        { id: 9, name: 'Ваня Демуцкий', image: 'https://pp.userapi.com/c845521/v845521223/20e9a5/O_d5pGfrUCI.jpg?ava=1', messages: [] },
        { id: 10, name: 'Аня Ковалева', image: 'https://pp.userapi.com/c841633/v841633205/751d2/zSqaD3S_nn4.jpg?ava=1', messages: [] },
        { id: 11, name: 'Дима Лемавский', image: 'https://pp.userapi.com/c851332/v851332975/17e82b/yfLpC4dSYVs.jpg?ava=1', messages: [] },
        { id: 12, name: 'Дамир Малеков', image: 'https://pp.userapi.com/c849420/v849420420/1cc868/UIcCjAEAz4M.jpg', messages: [] }
    ],
    currentId: null,
    isFullMode: false,
}

const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                dialogs: state.dialogs.map(dialog => {
                    if (state.currentId === dialog.id) {
                        let newMessage = {
                            id: dialog.messages.length === 0 ? 1 : dialog.messages.lenght + 1,
                            message: action.message,
                        }

                        return {
                            ...dialog,
                            messages: [...dialog.messages, newMessage]
                        }
                    }
                    return dialog
                })
            }
        case FULL_MODE:
            debugger
            return {
                ...state,
                isFullMode: action.value === true ? true : false
            }
        case GET_CURRENT_USER_ID:
            return {
                ...state,
                currentId: action.userId
            }
        default:
            return state
    }
}
export const getCurrentUserId = (userId) => ({type: GET_CURRENT_USER_ID, userId: userId})
export const fullMode = (value) => ({ type: FULL_MODE, value: value })
export const sendMessageActionCreator = (message, userId) => ({ type: SEND_MESSAGE, message: message, userId: userId })

export default dialogsReduser