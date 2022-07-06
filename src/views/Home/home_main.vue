<template>
    <div>
        <div>
 <div><el-tag class="ml-2" type="success">{{$route.meta[0]}}</el-tag></div>
        </div>
        <div>
            <router-view></router-view></div>
    </div>
</template>
    
<script setup >
import Tag from "../../components/home_main_title/title.vue"
import { useRoute } from "vue-router";
import { onMounted } from "vue";
const route=useRoute()
onMounted(()=>
{
})

</script>
<style lang="scss" scoped>
div{
    // margin-bottom: 10px ;
}
</style>