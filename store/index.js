// export const state = () => ({
//     userToken: '',
//     userId: null
// })

// export const getters = {
//     getUserToken(store) {
//         return store.userToken
//     },
//     getUserId(store) {
//         return store.userId
//     }
// }

// export const actions = {
//     async fetchUserToken(ctx, data) {
//         try {
//             const response = await this.$axios.post(
//                 `/v3/login`,
//                 {
//                     login: data.login,
//                     password: data.password
//                 }
//             );
//             if (response) {
//                 ctx.commit('setUserToken', response.data);
//             }
//         } catch (e) {
//             console.error(e)
//         }
//     },
//     async fetchUserData(ctx) {
        
//     }
// }

// export const mutations = {
//     setUserToken(store, data) {
//         store.userToken = data.token
//         store.userId = data.user.id
//     }
// }