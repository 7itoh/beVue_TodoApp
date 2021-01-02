import { createStore } from 'vuex';

const state = {
    msg : '',
};

const getters = {
    msg: state => state.msg, 
};

const mutations = {
    updateMsg(state, newMessage) { 
        state.msg = newMessage;
    }
};

const actions = {
    updateMsg({ commit }, newMessage) { 
        commit('updateMsg', newMessage);
    }
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
