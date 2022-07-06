<template>
        <div id="z">

</div>
</template>
    
<script setup >
import * as echarts from 'echarts';
import { onMounted, reactive, watch } from 'vue';

const props =defineProps({
  list:{}
})
onMounted(()=>{
})
const item=reactive({
  name:[],
  sers:[]
})
watch(props.list,()=>{
  getzhu()
})

const getzhu=()=>{
  let arr=[]

    props.list.data.map((v,i)=>{
      item.name.push(v.date)
      arr.push(v.new)
   
    })

      item.sers=[
      {
           name: "数量",
      type: 'bar',

      data: arr
     }
     ]

    var chartDom = document.getElementById('z');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    feature: {

      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      data: item.name,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '数量',
      min: 0,
      max: 250,
      interval: 50,
    },

  ],
  series: item.sers
};

option && myChart.setOption(option);
}
    
</script>
    
<style lang="scss" scoped>
#z{
    width: 550px ;
    height: 250px;
    // min-width: 100%;
}
</style>