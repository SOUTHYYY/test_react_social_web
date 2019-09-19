import * as axios from 'axios'

const instance =  axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': '6b148e3a-8da8-41ee-9e1e-446f65d0a6dc'
    }
})

export const UsersAPI = {
    getUsers (pageSize = 40, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`,)
        .then(response => {
            return response.data
        })
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
        .then(restponse => {
            return restponse.data
        })
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`, {})
        .then(restponse => {
            return restponse.data
        })
    },
    getAuthUserData() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
}

