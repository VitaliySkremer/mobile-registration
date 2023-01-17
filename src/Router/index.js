import { createRouter, createWebHistory } from 'vue-router'
import EnterPage from "../Pages/EnterPage.vue";
import SignIn from "../Pages/SignIn.vue";
import SignUp from "../Pages/SignUp.vue";

const routes = [
	{
		path: '/',
		name: 'Main',
		component: EnterPage
	},
	{
		path: '/signIn',
		name: 'signIn',
		component: SignIn
	},
	{
		path: '/signUp',
		name: 'signUp',
		component: SignUp
	},
];

const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router