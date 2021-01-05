import { createStore } from 'vuex';

const state = {
    todos: [],
    inptTask: '',
};

const getters = {
    todos: state => state.todos,
    inptTask: state => state.inptTask,
};

const mutations = {
    setNewTask(state, newTask) { 
        state.todos.push(newTask);
    },
    createTask(state, newTask) { 
        state.inptTask = newTask;
    }
};

const actions = {
    setNewTask({ commit }, newTask) { 
        commit('setNewTask', newTask);
    },
    createTask({ commit }, newTask) { 
        commit('createTask', newTask.target.value);
    }
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
