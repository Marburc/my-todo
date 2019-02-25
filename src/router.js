import Vue from "vue";
import Router from "vue-router";
import Register from "./components/Register.vue";
import ToDoList from "./components/ToDoList";
import LogIn from './components/LogIn.vue';
import Home from './components/Home.vue';
import firebase from 'firebase';

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/todolist",
            name: "list",
            component: ToDoList

        },
        {
            path: "/login",
            name: "login",
            component: LogIn,
            meta: {
                requiresGuest: true,
            }

        },
        {
            path: "/",
            name: "home",
            component: Home,
            meta: {
                requiresAuth: true,
            }

        },
    ]
});


