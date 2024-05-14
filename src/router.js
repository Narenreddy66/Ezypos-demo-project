import { createRouter,createWebHistory } from "vue-router";
import LoginPage from './components/LoginPage.vue';
import isAuthenticated from "./shared/auth";
import mainrouter from "./maincomponents/mainComponets";

const routes=[
    {
        name:'LoginPage',
        path:'/',
        component:LoginPage, 
        meta: {
            isLoginPage: true
        },
        props: true
    },
   ...mainrouter
];
const router=createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach(async (to, from, next) => {
    console.log(to);
    console.log(from);

    if (to.matched.some((record) => !record.meta.isLoginPage)) {
        

        if (!isAuthenticated()) {
            next({ name: 'LoginPage' });
        } else {
            next();
        }
    } else {
        if (isAuthenticated()) {
            next({ name: 'FirstPage' });
        } else {
            next();
        }
    }
});

export default router;