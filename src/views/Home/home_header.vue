<template>
    <div style="width:100%">
        <el-row>
            <el-col :span="24" class="title">
                <div>{{$route.meta[0]}}</div>
          
                    <!-- <div @click="logout"> -->

<el-dropdown>
    <span class="el-dropdown-link">
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <!-- <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon> -->
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="ge">个人信息</el-dropdown-item>
        <el-dropdown-item @click="zu">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

                        
                    <!-- </div> -->
               
            </el-col>
        </el-row>
    </div>
</template>
    
<script setup>
import {useRouter} from "vue-router"
const router=useRouter()
const logout=()=>{
    console.log("1");
}
const ge=()=>{
    console.log("2");
    router.push({
        path:"/personal"
    })
}
const zu=()=>{
    console.log("3");
}
</script>
    
<style lang="scss" scoped>
.title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    padding: 10px 30px;
    color: #fff;

}
</style>