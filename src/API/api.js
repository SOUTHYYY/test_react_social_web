import * as axios from 'axios'

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        'API-KEY': 'd4e6fe04-624e-4685-b046-ebf4a1bdbf1f'
    }
})


export const UsersAPI = {
    getUsers(pageSize = 40, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(restponse => {
                return restponse.data
            })
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(restponse => {
                return restponse.data
            })
    },
}

export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
}

export const AuthAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = true) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


export const customAPI = {
    getCustomUsers() {
        axios.get('localhost:4000')
            .then(response => {
                debugger
                console.log(response)
            });
    }
}

