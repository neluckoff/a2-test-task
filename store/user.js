export const state = () => ({
    userData: null
})

export const getters = {
    getUserData(store) {
        return store.userData
    }
}

export const actions = {
    async fetchUserData(ctx, data) {
        try {
            const response = await this.$axios.get(
                `/v3/user/${data.userId}`,
                {
                    headers: {
                        'X-User-Token': data.userToken
                    }
                }
            );
            if (response) {
                ctx.commit('setUserData', response.data);
            }
        } catch (e) {
            console.error(e)
        }
    },
    async putUserData(ctx, data) {
        console.log(data)
        try {
            const response = await this.$axios.put(
                `/v3/user/${data.user.userId}`, 
                data.userData,
                {
                    headers: {
                        'X-User-Token': data.user.userToken,
                        'Content-Type': 'application/json'
                    },
                }
            );
            if (response) {
                ctx.dispatch('fetchUserData', data.user)
            }
        } catch (e) {
            console.error(e)
        }
    }
}

export const mutations = {
    setUserData(store, data) {
        store.userData = data
    }
}