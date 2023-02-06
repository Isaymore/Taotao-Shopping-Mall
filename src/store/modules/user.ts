const state = {
    userInfo: {}
}
// getter是为了简化数据而生
const getters = {
    username: state => state.userInfo.username
}
const mutations = {
    // 修改state对象的userInfo
    // 
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo
    }
}
const actions = {
    // 封装获取用户资料的action
    getUserInfo({ commit }) {
        console.log('getUserInfo')
    }
}
export default {
    namespace:true, // 开启命名空间
    state,
    getters,
    mutations,
    actions
}
