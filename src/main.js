import { createApp } from 'vue'
import App from './App.vue'
import router from "./Router/index.js";
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import './style.scss'

createApp(App).use(router).use(
		VueTippy,
		{
			defaultProps: {
				theme: 'main',
				maxWidth: '184px',
				trigger: 'click',
			},
		}
	).mount('#app')
