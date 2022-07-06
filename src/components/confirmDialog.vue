<template>


<div>
      <el-dialog
    v-model="bool"
    title="提示"
    width="30%"
    :close-on-click-modal="false"
    :before-close="handleClose"

  >
    <span>你确定要删除吗

    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="close"
          >删除</el-button
        >
      </span>
    </template>
  </el-dialog>
</div>
</template>

<script setup>
import { onMounted, ref,defineProps} from 'vue'


const dialogVisible = ref(true)
   const props=defineProps({
    bool:null
   })
   const emit=defineEmits(['update:bool'])
onMounted(()=>{
 
//     setTimeout(()=>{
// console.log(props)
// console.log("9")
//     },5000)
})

const close=()=>{
emit("update:bool",false)
}
// 关闭前回调
const handleClose=(done)=>{
    emit("update:bool",false)
    done()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>