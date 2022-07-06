import {defineStore} from "pinia"
import { getData } from "../../api/api"
export const mainStore = defineStore('main', {
    // other options...
    state:()=>({         // state是一个函数，函数返回值为管理的状态
      item:{},
      login:false
    }),
    getters:{

    },
    actions:{
       async getLi(){
        let res=await getData()
        this.item=res.data
        console.log(res.data,"45666666666666666666666666")
        }

    }
  })
  const loginStore=defineStore('login',{
    state:()=>({
      login:false
    })
  })
  export default loginStore