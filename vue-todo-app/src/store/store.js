import { createStore } from 'vuex';

const state = {
    todos: [],
};

const getters = {
    todos: state => state.todos,
};

const mutations = {
    setNewTask(state, newTask) { 
        state.todos.push(newTask);
    },
};

const actions = {
    setNewTask({ commit }, newTask) { 
        commit('setNewTask', newTask);
    },
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
