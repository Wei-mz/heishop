<template>
    <div id="y">

    </div>
</template>
    
<script setup >
import { onMounted, watch } from "vue";
import * as echarts from 'echarts';

const props=defineProps({
    list:{}
})

onMounted(() => {
})
const getBin=()=>{
      var chartDom = document.getElementById('y');
    var myChart = echarts.init(chartDom);
    var option;
    option = {

        tooltip: {
            // trigger: 'item',
            formatter: '{a} <br/>{b} : {c}'
        },
        legend: {
            bottom: -20,
            left: 'center',

        },
        series: [
            {
                type: 'pie',
                // radius: '65%',
                center: ['50%', '50%'],
                // selectedMode: 'single',

label:{            //饼图图形上的文本标签
                            // normal:{
                                show:true,
                                position:'inner', //标签的位置

                                    fontWeight : 300 ,
                                    fontSize : 10,    //文字的字体大小
                                
                                formatter:'{b}:{d}%'

                                
                            // }
                        },

                data:props.list.data

            }
        ]
    };

    option && myChart.setOption(option);

}
watch(props.list,()=>{
    getBin()
})
</script>
    
<style lang="scss" scoped>
#y {
    width: 250px ;
    height: 200px;
}
</style>