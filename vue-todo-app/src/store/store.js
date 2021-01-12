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
    delTask(state, delTask) {
        state.todos = delTask;
    }
};

const actions = {
    setNewTask({ commit }, newTask) { 
        commit('setNewTask', newTask);
    },
    delTask({ commit }, delTask) {
        commit('delTask', delTask);
    }
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
