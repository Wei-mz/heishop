<template>


        <div class="common-layout">
                <el-container>
                        <el-aside width="360px">

                                <div>
                                        <el-space>
                                                <el-card class="box-card" style="width: 350px">
                                                        <template #header>
                                                                <div class="admin">
                                                                        <el-avatar :size=100
                                                                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                                                                        <div class="text">
                                                                                <span>Admin</span>
                                                                                <p>超级管理员</p>
                                                                        </div>
                                                                </div>
                                                        </template>
                                                        <div class="place">
                                                                上次登录时间：<span>2017-7.19</span>
                                                        </div>
                                                        <div style="margin:10px 0 0 0 " class="place">
                                                                <div
                                                                        style="display:inline;background-color: #288FFF;color: aliceblue;">
                                                                        上次登录地点：
                                                                </div><span>2017-7.19</span>
                                                        </div>

                                                </el-card>
                                        </el-space>

                                </div>
                                <div style="margin:20px 0">
                                        <el-space>
                                                <el-card class="box-card" style="width: 350px">
                                                        <template #header>
                                                                <el-table :data="tab.tableData" style="width: 100%">
                                                                        <el-table-column prop="name" label="品牌" />
                                                                        <el-table-column prop="todayBuy" label="日销量" />
                                                                        <el-table-column prop="monthBuy" label="月销量" />
                                                                        <el-table-column prop="totalBuy" label="总数(台)" />
                                                                </el-table>
                                                        </template>


                                                </el-card>
                                        </el-space>
                                </div>

                        </el-aside>
                        <el-container>

                                <el-header>

                                        <div>
                                                <el-steps :active="3" align-center>
                                                        <el-step title="开始" />
                                                        <el-step title="加速" />
                                                        <el-step title="前方高能" />
                                                        <el-step title="结束" />
                                                </el-steps>
                                        </div>
                                </el-header>
                                <el-main style="padding:10px 20px">
                                        <div>
                                                <EchartsX :list="list"></EchartsX>
                                        </div>
                                        <div class="footer">
                                                <div>
                                                        <EchartsZ :list="zhu"></EchartsZ>
                                                </div>
                                                <div>
                                                        <EchartsY :list="bin"></EchartsY>
                                                </div>
                                        </div>
                                </el-main>

                        </el-container>
                </el-container>
        </div>




</template>
    
<script setup>
import EchartsY from "../../components/echartsY.vue"
import EchartsX from "../../components/echartsX.vue"
import EchartsZ from "../../components/echartsZ.vue"
import { mainStore } from "../../store/index"
import { onBeforeUnmount, onMounted, reactive, ref } from "vue"
const store = mainStore()

const tab=reactive({
        tableData:[]
})
// 则线图
let list = reactive({
        name: [],
        data: [],
        sers: []
})
// 柱状图
let zhu=reactive({
        data:[]
})
let bin=reactive({
        data:[]
})

onMounted(async () => {
        // bool.value = true
        await store.getLi()
        xian()

})

const xian=()=>{
list.name=store.item.orderData.name
list.data=store.item.orderData.date
list.sers=store.item.orderData.data
zhu.data=store.item.userData
bin.data=store.item.videoData
tab.tableData=store.item.tableData

}
onBeforeUnmount(() => {
console.log("结束")

})


</script>
    

    <style lang='scss' scoped>
    .admin {
            display: flex;
            align-items: center;
    
    
            .text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 0 20px;
    
                    &>span {
                            font-size: 24px;
                            font-weight: 600;
                            padding: 8px 0;
    
                    }
    
                    &>p {
                            font-size: 12px;
                    }
            }
    }
    
    .place {
            &>span {
                    padding: 0 40px;
            }
    }
    
    .footer {
            display: flex;
            justify-content: space-between;
            // padding: 10px 20px;
    }
    </style>
