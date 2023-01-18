import {defineStore} from "pinia";

export const useUsersStore = defineStore('users',{
	state: ()=>{
		return {
			users:[
				{name:'Vitalik', email:'vitalik.semkin@mail.ru', password:'PAssword_123'}
			],
			authUser:{}
		}
	},
	actions:{
		addUsers(user){
			this.users.push(user);
		},
		setAuthUser(user){
			this.authUser = user;
		}
	}
})