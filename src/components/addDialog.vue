<template>


  <div>
    <el-dialog v-model="adbool" title="增加" width="35%" :before-close="handleClose"  :close-on-click-modal="false">
      <div>

        <el-form :label-position="labelPosition" label-width="60px" class="add">
          <!-- 名称 -->
          <el-form-item label="名称" size="small">
            <el-input v-model="formLabelAlign.froms.name" class="el-ipt" placeholder="请输入名称"/>
          </el-form-item>
          <!-- 类型 -->
          <el-form-item label="类型" >
            <el-select placeholder="请选择类型" v-model="formLabelAlign.froms.type">
              <el-option label="学习" value="学习" />
              <el-option label="娱乐" value="娱乐" />
            </el-select>
          </el-form-item>
          <!-- 数量 -->
          <el-form-item label="数量" size="small">
            <el-input v-model="formLabelAlign.froms.num" class="el-ipt" placeholder="请输入数量" />
          </el-form-item>

          <!-- 出版社 -->
          <el-form-item label="出版社" >
            <el-select placeholder="请选择出版社" v-model="formLabelAlign.froms.press">
              <el-option label="达州" value="达州" />
              <el-option label="成都" value="成都" />
            </el-select>
          </el-form-item>
          <!-- 编号 -->
          <el-form-item label="编号" size="small">
            <el-input v-model="formLabelAlign.froms.cip" class="el-ipt" placeholder="请输入商品编号" />
          </el-form-item>
          <!-- 其他描述 -->

          <el-form-item label="其他描述" size="small">
            <el-input v-model="formLabelAlign.froms.other" class="el-ipt" placeholder="请添加商品描述"/>
          </el-form-item>
        </el-form>

      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">清除</el-button>
          <el-button type="primary" @click="sumbit">增加</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script  setup>

import { ok } from 'assert';
import { onMounted, reactive, ref } from 'vue'

const labelPosition = ref('right')

const formLabelAlign = reactive({
froms:{
  name:"",
  type:"",
  num:"",
  press:"",
  cip:"",
  other:""
}
})
const props=defineProps({
  adbool:"",
  list:[],
  text:{
    
  }
})
   const emit=defineEmits(['update:adbool'])
const centerDialogVisible = ref(true)

// console.log(props)

// 关闭弹框
const handleClose=(done)=>{
    emit("update:adbool",false)
    done()
}
// 清除
const close=()=>{
console.log(props)
}
// 提交
const sumbit=()=>{
emit("update:adbool",false)
}
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.add {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .el-ipt {
    width: 220px;
  }
}
.a{
  min-width: 400px;
}
</style>