<template>
    <div>
        <div class="tabtitle">





            <el-input class="ipt" v-model="input2" placeholder="请输入关键字" :suffix-icon="Search" />


            <el-button type="primary" color="#409EFF" :icon="CirclePlus" @click="add">添加</el-button>





        </div>
        <!-- 表格 -->
        <el-table :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }"
            style="width: 100%;overflow-y: auto;max-height: 455px;min-width: 100%"
            @selection-change="handleSelectionChange">
            <!-- 选择框 -->
            <el-table-column type="selection" width="55" />
            <!-- 名称 -->
            <el-table-column prop="name" label="名称" />
            <!-- 类型 -->
            <el-table-column prop="type" label="类型" />
            <!-- 数量 -->
            <el-table-column prop="num" label="数量" sortable />
            <!-- 出版社 -->
            <el-table-column prop="press" label="出版社" />
            <!-- 编号 -->
            <el-table-column prop="cip" label="编号" width="180" />
            <!-- 时间 -->
            <el-table-column prop="time" label="时间" sortable />
            <!-- 详细信息 -->
            <el-table-column label="其他详情" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #default>
                            <div>name: {{ scope.row.name }}</div>
                            <!-- <div>address: {{ scope.row.address }}</div> -->
                        </template>
                        <template #reference>
                            <el-tag>{{ scope.row.other }}</el-tag>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <el-config-provider :locale="locale">
            <div class="demo-pagination-block">

                <el-pagination v-model:currentPage="currentPage3" v-model:page-size="pageSize3"
                    :page-sizes="[2, 3, 5, 10, 50, 80]" small :disabled="disabled" background
                    layout="total,sizes,prev, pager, next, jumper," :total="50" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </el-config-provider>

        <!-- 删除确认弹框 -->
        <cDailog v-model:bool="delBool"></cDailog>

        <!-- 增加修改弹框 -->
        <aDailog v-model:adbool="adbool" :text="text.text"></aDailog>
         <eDailog v-model:editbool="editbool" :editList="editList.list" v-if="editbool"></eDailog>
    </div>
</template>

<script  setup>
import { reactive, ref } from "vue"
import { Search, Plus, CirclePlus } from '@element-plus/icons-vue'
import cDailog from "../../components/confirmDialog.vue"
import aDailog from "../../components/addDialog.vue"
import eDailog from "../../components/editDialog.vue"

import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = ref(zhCn)
// 搜索value
const input2 = ref()
// 删除弹框
let delBool = ref(false)
// 增加，修改弹框
let adbool=ref(false)
const text=reactive({
    text:{
  title:"",
    data:[],
    btnl:"",
    btnr:""
    }
})

const add=()=>{
    text.text={
          title:"增加数据",
    data:[],
    btnl:"清除",
    btnr:"增加"
    }
    adbool.value=true
}
let editbool=ref(false)
const editList=reactive({
    list:{}
})



const currentPage3 = ref(1)
const pageSize3 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}


const multipleTableRef = ref()
const multipleSelection = ref([])
const toggleSelection = (rows) => {
    if (rows) {
        rows.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, undefined)
        })
    } else {
        multipleTableRef.value.clearSelection()
    }
}
// 选中数据
const handleSelectionChange = (val) => {
    multipleSelection.value = val

    console.log(multipleSelection)
}
// 修改按钮
const handleEdit = (index, row) => {
    console.log(index, row)
    editList.list=row
    editbool.value=true
}
// 删除按钮
const handleDelete = (index, row) => {
    console.log(index, row)
    delBool.value = true
}


const formatter = (row, column) => {
    return row.address
}

const tableData = [
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23 7:00",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
    {
        name: "js",
        booknum: 9527,
        type: "学习",
        time: "2020-2-23",
        num: 66,
        press: "人民出版",
        cip: "ISBN 7-100-0177-7",
        other: "yyyy"



    },
]
</script>
<style lang="scss" scoped>
.demo-pagination-block {
    width: 100%;
    display: flex;
    padding: 40px 0 0 0;
    justify-content: center;
}

.tabtitle {
    display: flex;
    padding: 10px 20px 20px 0px;
    margin-bottom: 10px;
    justify-content: flex-end;
    border-bottom: 1px solid rgb(229, 229, 229);

    &>.ipt {
        width: 200px;
        margin: 0 10px;


    }
}
</style>