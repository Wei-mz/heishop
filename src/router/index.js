import { Chicken } from "@element-plus/icons-vue"
import { createRouter, createWebHistory } from "vue-router"
// import  mainStore from "../store"
// import loginStore from "../store/index.js"
// console.log(loginStore)
import pinia from "../store/store"
import { mainStore } from "../store/index"
// console.log(mainStore(pinia))
const store=mainStore(pinia)
console.log(store.login)



const routes = [
    {
        path: "/",
        component: () => import("../views/Home/Home.vue"),
        redirect: "",
        children: [
            { path: "", name: "index",meta:["首页"], component: () => import("../views/Home/Index.vue") },
            // { path: "other",meta:["首页"], name: "other", component: () => import("../views/Other/Other.vue") },
            { path: "other/index1",meta:["订单管理"], name: "index1", component: () => import("../views/Other/children/index1.vue") },
            { path: "other/index2",meta:["订单分类"], name: "index2", component: () => import("../views/Other/children/index2.vue") },
            { path: "user",meta:["用户管理"], name: "user", component: () => import("../views/User/User.vue") },
            { path: "shop",meta:["商品管理"], name: "shop", component: () => import("../views/Shop/Shop.vue") },
            { path: "personal",meta:["个人中心"], name: "personal", component: () => import("../views/Personal/Personal.vue") }
        ]

    },
    {
        path: "/login",
        component: () => import("../views/Login/Login.vue")
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("../views/404.vue")
    }
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }

)

const whileList=['/login']
router.beforeEach((to, from, next) => {
    if(store.login||localStorage.getItem("user")||whileList.includes(to.path)){
        next()
    }else{
    //    next('/login')
     next('/login')
    // next()
    }
  

})
export default router