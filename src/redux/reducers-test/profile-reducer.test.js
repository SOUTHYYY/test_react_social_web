import profileReduser, {addPost} from '../profile-reducer'


// How to write redusers-tests?
// 1) Test Data
// 2) Action
// 3) Expectation


it('new post should be aded', () => {
    let action = addPost('some post')
    let state = {
        posts: [
            { id: 3, message: "Hello everybody", date: '24 авг в 12:30', likesCount: 1, isYouLike: false, commentMode: false, comments: [] },
            { id: 2, message: "I love to code", date: '30 июл в 19:01', likesCount: 15, isYouLike: false, commentMode: false, comments: [] },
            { id: 1, message: "Hello everybody", date: '30 июл в 19:00', likesCount: 3, isYouLike: false, commentMode: false, comments: [] },
        ],
    }
    let newState = profileReduser(state, action) 
    expect(newState.posts.length).toBe(4)
})

