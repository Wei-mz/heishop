<template>
  <el-card class="box-card">
    <template #header>

       <el-row>
         <el-col :span="3">
            <h2>个人信息</h2>
         </el-col >
        <el-col :span="4" ><el-button type="primary" link >编辑</el-button></el-col>
        <el-col :span="15" style="text-align: right"><el-button type="primary" link @click="$router.go(-1)">返回上一页</el-button></el-col>
       </el-row>

  
    </template>
  <div class="xin">
 <el-row>
    <el-col :span="20">头像</el-col>
    <el-col :span="4">头像</el-col>
  </el-row>
     <el-row>
    <el-col :span="20">用户名</el-col>
    <el-col :span="4">暂无</el-col>
  </el-row>
     <el-row>
   <el-col :span="20">昵称</el-col>
    <el-col :span="4">暂无</el-col>
  </el-row>
     <el-row>
    <el-col :span="20">邮箱</el-col>
    <el-col :span="4">hh@qq.com</el-col>
  </el-row>
     <el-row>
  <el-col :span="20">手机</el-col>
    <el-col :span="4">11111111111111</el-col>
  </el-row>
     <el-row>
    <el-col :span="20">性别</el-col>
    <el-col :span="4">男</el-col>
  </el-row>
     <el-row>
    <el-col :span="20">常住地</el-col>
    <el-col :span="4">暂无</el-col>
  </el-row>
     <el-row>
    <el-col :span="20">个性签名</el-col>
    <el-col :span="4">暂无</el-col>
  </el-row>
  </div>
  </el-card>
</template>

<style lang="scss" scoped>

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;

}

.item {
  margin-bottom: 18px;
  
}

.box-card {
  width: 100%;

}
.xin{
    .el-row{
        padding: 15px 0;
        border-bottom: 1px solid rgb(174, 174, 174);
    }
}
</style>