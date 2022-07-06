
// 新建hooks/loading.ts文件 
let loading
function openLoading () {
  loading = ElLoading.service({
    lock: true,

    // spinner:'el-icon-AddLocation',
    text: '登录中，请稍后....',
    background: 'rgba(0, 0, 0, 0.7)',
  })
}
function closeLoading () {
  loading.close()
}
export {
  openLoading,
  closeLoading

}