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
        const taskFilter = state.todos.filter(todos => todos.id !== delTask.id);
        state.todos = [];
        taskFilter.forEach((todo, id) => {
            id = id === 0 ? 1 : id + 1;
            state.todo = {
                id: id,
                name: todo.name,
                state: todo.state,
            }
            state.todos.push(state.todo);
        });
    }
};

const actions = {
    setNewTask({ commit }, newTask) { 
        commit('setNewTask', newTask);
    },
    delTask({ commit }, delTask) {
        const commitCheck = window.confirm(`Delete the Task id: ${delTask.id} name: ${delTask.name} Are You OK?`);
        if(commitCheck) commit('delTask', delTask);
    }
};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
})

export default store;
