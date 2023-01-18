import { createRouter, createWebHistory } from 'vue-router'
import EnterPage from "../Pages/EnterPage.vue";
import SignIn from "../Pages/SignIn.vue";
import SignUp from "../Pages/SignUp.vue";
import Main from "../Pages/Main.vue";

const routes = [
	{
		path: '/',
		name: 'Enter',
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
	{
		path: '/main',
		name: 'main',
		component: Main
	},
];

const router = createRouter({
	history:createWebHistory(),
	routes,
})

export default router