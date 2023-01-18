import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from "pinia";
import router from "./Router/index.js";
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';
import './style.scss';

const pinia = createPinia();

createApp(App).use(router).use(
		VueTippy,
		{
			defaultProps: {
				theme: 'main',
				maxWidth: '184px',
				trigger: 'click',
			},
		}
	)
	.use(pinia)
	.mount('#app');
