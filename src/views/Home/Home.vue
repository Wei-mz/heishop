<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Nav></Nav>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <Main></Main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
    
<script setup>
import Main from "./home_main.vue"
import Nav from "./home_nav.vue"
import Header from "./home_header.vue"
import { useRoute } from "vue-router"
import { onMounted } from "vue"

const router=useRoute()




onMounted( ()=>{

    ElMessage({
   showClose: false,
    message: '欢迎你，xxxx！',
    type: 'success',
    center: true,
    duration:2000,
    offset:60
  })
})

</script>
    
<style lang="scss" scoped>
.el-header {
    padding: 0;
}

</style>