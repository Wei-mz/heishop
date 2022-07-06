<template>
        <div>
                <!-- <div class="user_title"> -->
 <el-row :gutter="20" >
                               <el-col :span="8">
                                <!-- 搜索与添加区域 -->
                                <el-input placeholder="请输⼊内容" clearable>
                                        <template #append>
                                                <el-button>
                                                        <el-icon>
                                                                <search />
                                                        </el-icon>
                                                </el-button>
                                        </template>
                                </el-input>
                        </el-col>
                        <el-col :span="2">
        <el-button type="primary"><el-icon><Orange /></el-icon>刷新</el-button>
      </el-col>
      <el-col :span="1">
        <el-button type="primary"><el-icon><CirclePlus /></el-icon>添加管理员</el-button>
      </el-col>
 </el-row>


                <!-- </div> -->


                <el-table :data="tableData" style="width: 100%" :header-row-style="headestyle" >
                        <el-table-column prop="date" label="管理员编号"  />
                        <el-table-column prop="date" label="管理员名称" />
                        <el-table-column prop="name" label="角色" />
                        <el-table-column label="操作" align="center">
                                <template #default="scope">
                                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
                                                :icon="EditPen">编辑</el-button>
                                        <el-button size="small" type="danger" :icon="Delete"
                                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                        </el-table-column>

                </el-table>
        </div>
</template>

<script setup>
import { Delete, Edit, Search, Share, Upload, EditPen } from '@element-plus/icons-vue'
import { color } from 'echarts'

const tableData = [
        {
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
        },
        {
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
        },
        {
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
        },
        {
                date: '2016-05-01',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
        },
]
const headestyle = () => {
        // return 'text-align: center'
}
</script>
<style lang="scss" scoped>
.u_ipt {
        border: 1px solid #000;
}

.userserach {
        width: 200px;
        border: none;

}
.el-row{
        margin: 15px 0;
        display: flex;}
</style>