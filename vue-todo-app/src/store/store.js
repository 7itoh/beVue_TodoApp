import { createStore } from 'vuex';

const state = {
    todos: [],
    taskColumn: {
        id: '',
        name: '',
        state: '',
        delete: '',
    },
    inptTask: '',
    indexTaskCnt: 0,
};

const getters = {
    todos: state => state.todos,
    inptTask: state => state.inptTask,
};

const mutations = {
    addNewTask(state) {
        const inptTaskChk = /\S/g;
        if (!state.inptTask || !inptTaskChk.test(state.inptTask)) { 
            return;
        }
        state.indexTaskCnt++;
        state.task = {
            id: state.indexTaskCnt,
            name: state.inptTask,
            state: '実行中',
            delete: '削除',
        }
        state.inptTask = '';
        state.todos.push(state.task);
    },
    createTask(state, newTask) { 
        state.inptTask = newTask;
    }
};

const actions = {
    addNewTask({ commit }, addTask) { 
        commit('addNewTask', addTask.target.value);
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
