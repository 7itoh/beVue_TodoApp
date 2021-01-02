import { createRouter, createWebHistory } from 'vue-router';
import TodoForm from './components/views/TodoForm.vue';

const routes = [
    {
        path: '/',
        name: 'TodoForm',
        component: TodoForm,
    }
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
