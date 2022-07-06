<template>
        <el-col :sm="12" :lg="6" class="err">
      <el-result
        icon="error"
        title="找不到页面 404"
        sub-title="请重新刷新一下，在试试吧!"
      >
        <template #extra>
          <el-button type="primary" @click="()=>$router.push('/')">返回主页</el-button>
        </template>
      </el-result>
    </el-col>
</template>
    
<script setup>
    
</script>
    
<style lang="scss" scoped>
.err{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

</style>