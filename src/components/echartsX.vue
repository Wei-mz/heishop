<template>
    <div id="x">

    </div>

</template>
    
<script setup >
import { onMounted,defineProps, watch, reactive } from "vue";
import * as echarts from 'echarts';
// import { da } from "element-plus/es/locale";

const lists= defineProps({
    list:{}
})

const serie=reactive({
    item:[]
})

const ok=()=>{

serie.item=[]
lists.list.sers.map((v,i)=>{
    serie.item.push({
        name:lists.list.name[i],
      type: 'line',
      stack: 'Total',
      data:v
    })
})






var chartDom = document.getElementById('x');
    var myChart = echarts.init(chartDom);
    

    var

        option = {

            tooltip: {
                trigger: 'axis'
            },
            legend: {
                itemHeight: 14,
                itemWidth: 14,
                icon: "diamond",

                data: lists.list?.name
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: lists.list?.data
            },
            yAxis: {
                type: 'value'
            },
            series:serie.item
        };

  option && myChart.setOption(option);

}

onMounted(async () => {
//       setTimeout(()=>{
//  ok()
//       },1000)
})
watch(lists.list,()=>{

ok()
},{
    deep:true
})

</script>
<style lang="scss" scoped>
#x {
    width: 800px;
    height: 300px;
    min-width: 100%;
}
</style>