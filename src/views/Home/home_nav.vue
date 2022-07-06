<template>
    <div class="nav">
        <el-col>
            <h5 class="nav_title">我还差个头</h5>

            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo a"
                :default-active="$route.path" text-color="#fff" @open="handleOpen" @close="handleClose" router>
                <!-- 首页 -->
                <el-menu-item index="/">
                    <el-icon>
                        <HomeFilled />

                    </el-icon>
                    <span>首页</span>
                </el-menu-item>
                <el-menu-item index="/shop">
                    <el-icon>
                        <Histogram />
                    </el-icon>
                    <span>商品管理</span>
                </el-menu-item>
                <el-menu-item index="/user">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span>用户管理</span>
                </el-menu-item>
                <el-sub-menu index="/other">
                    <template #title>
                        <el-icon>
                            <ScaleToOriginal />
                        </el-icon>
                        <span>商品修改</span>
                    </template>

                    <el-menu-item index="/other/index1">
                        <el-icon>
                            <Plus />
                        </el-icon>
                        <span>订单管理</span>
                    </el-menu-item>
                    <el-menu-item index="/other/index2">
                      <el-icon><Chicken /></el-icon>
                        <span>订单分类</span>
                    </el-menu-item>

                </el-sub-menu>

                <el-menu-item index="/404">
                  <el-icon><MoreFilled /></el-icon>
                    <span>暂未开发</span>
                </el-menu-item>
                <el-menu-item index="/404">
                   <el-icon><MoreFilled /></el-icon>
                    <span>暂未开发</span>
                </el-menu-item>
                <el-menu-item index="/99">
                 <el-icon><MoreFilled /></el-icon>
                    <span>暂未开发</span>
                </el-menu-item>
                <el-menu-item index="/99">
                 <el-icon><MoreFilled /></el-icon>
                    <span>暂未开发</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </div>
</template>
    
<script setup>
const handleOpen = (key, keyPath) => {
    // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    // console.log(key, keyPath)
}
</script>
    
<style lang="scss" scoped>
.nav {
    width: 100%;
    height: 100vh;
    min-height: 100%;
    background-color: #545C64;

    .a {
        border-right: 1px solid #545C64;
    }

    .nav_title {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        color: #fff;
    }

}
</style>