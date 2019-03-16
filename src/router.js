import Vue from "vue";
import Router from "vue-router";
import Register from "./components/Register.vue";
import ToDoList from "./components/ToDoList";
import LogIn from './components/LogIn.vue';
import Home from './components/Home.vue';
import firebase from 'firebase';


Vue.use(Router);

let router = new Router({
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

router.beforeEach((to, from, next) => {
    // Check for requiredAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Check if NOT logged in
        if (!firebase.auth().currentUser) {
            //Go to login
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            // Proceed to route
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        // Check if  logged in
        if (firebase.auth().currentUser) {
            //Go to login
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        // Proceed to route
        next();
    }
});

export default router;

