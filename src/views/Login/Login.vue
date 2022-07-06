<template>
    <div class="login">
        <div>
            <fieldset id="downbox">
                <legend>
                    &nbsp;&nbsp;&nbsp;&nbsp;Everyday · 运营系统&nbsp;&nbsp;&nbsp;&nbsp;
                </legend>
                <div class="wximg">
                    <p>Strive&nbsp;&nbsp;&nbsp;&nbsp;Everyday</p>
                </div>
            </fieldset>
        </div>
        <div id="user">
            <el-form :inline="false" :model="formInline" class="demo-form-inline" @submit.prevent>
                <el-form-item>
                    <div class="ipt">
                        <span>U</span>
                        <input type="text" v-model="formInline.user" placeholder="账号">
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="ipt">
                        <span>P</span>
                        <input type="password" v-model="formInline.region" placeholder="密码">
                    </div>
                </el-form-item>

                <div class="btn">
                    <button @click="onSubmit(e)">登录</button> <button >取消</button>
                </div>


            </el-form>




        </div>
    </div>
    <canvas id="canvas">
    </canvas>
</template>
    
<script setup >
import { onMounted, reactive,getCurrentInstance } from "vue";
import {useRouter} from "vue-router"
import {mainStore} from "../../store/index"
const {proxy}=getCurrentInstance()
const store=mainStore()

const router=useRouter()

const formInline = reactive({
    user: '',
    region: '',
})

const onSubmit = () => {
    if(formInline.user!==""&&formInline.region!=""){
if(formInline.user=="admin"&&formInline.region==123){
              proxy.$openloding()
    setTimeout(()=>{
  router.replace({
        path:"/"
    })
    store.login=true
    localStorage.setItem("user",formInline)

    proxy.$closeloding()
    },3000)
}else{
            proxy.$openloding()
        setTimeout(()=>{
            proxy.$closeloding()
ElMessage({
    showClose:false,
    message:"账号或者密码输入错误",
    type:'error',
    duration:900,

})
        },1000)
}

    }else{
        proxy.$openloding()
        setTimeout(()=>{
            proxy.$closeloding()
ElMessage({
    showClose:false,
    message:"账号或者密码不能为空",
    type:'error',
    duration:900,

})
        },1000)
//             ElMessage({
//    showClose: false,
//     message: '欢迎你，xxxx！',
//     type: 'success',
//     center: true,
//     duration:2000,
//     offset:60
//   })
    }
  
  
  

}


const bg = () => {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,

        hue = 217,
        stars = [],
        count = 0,
        maxStars = 2500;//星星数量

    var canvas2 = document.createElement('canvas'),
        ctx2 = canvas2.getContext('2d');
    canvas2.width = 100;
    canvas2.height = 100;
    var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
    gradient2.addColorStop(0.025, '#CCC');
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
    gradient2.addColorStop(1, 'transparent');

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    // End cache

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (min > max) {
            var hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x, y) {
        var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
    }

    var Star = function () {

        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 18;
        //星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 500000;
        //星星移动速度
        this.alpha = random(2, 10) / 10;

        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    }

    for (var i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (var i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        };

        window.requestAnimationFrame(animation);
    }

    animation();

}

onMounted(() => {
    bg()



})

</script>
    
<style lang="scss" scoped>
#canvas {
    width: 100vw;
    height: 100vh;
}

.login {
    width: 500px;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;

    #downbox {
        display: block;
        text-align: center;
        margin-top: 5px;
        // height: 70px;
        width: 385px;
        border-top: solid rgb(228, 24, 24) 1px;
        border-image: linear-gradient(to top, #17243C, #1A5A80) 10;
        border-bottom: none;
        border-left: none;
        border-right: none;

        & legend {
            font-weight: 600;
            color: rgb(255, 255, 255);
            opacity: 0.8;
            font-size: 16px;
            margin: 0 auto;
        }

        &>div>p {
            margin: 15px 0;
            font-size: 14px;
            opacity: 0.6;
        }
    }

    #user {
        margin: 40px 0 0 0;

        input {
            background-color: rgba(128, 31, 31, 0);
            color: #fff;
            width: 260px;

            &:focus {
                border: none;
                outline: none;
            }
        }

        .btn {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            margin: 40px 0;

            button {
                background-color: rgba(163, 94, 94, 0);
                color: #1A567B;
                border: 1px solid #1A567B;
                padding: 5px 30px;
                font-size: 14px;

                &:hover {
                    cursor: pointer;
                    border: 1px solid #287fb5;
                    color: #287fb5;
                }

            }
        }
    }
}

.ipt {
    border-bottom: 1px solid #2573a4;
    border-top: 1px solid #123a53;
    border-left: 1px solid #1f5d83;
    border-right: 1px solid #2573a4;
    display: flex;
    justify-content: center;
    align-items: center;
    caret-color: #1f5d83;

    &:focus-within {

        border-bottom: 1px solid #329ee0;
        border-top: 1px solid #329ee0;
        border-left: 1px solid #329ee0;
        border-right: 1px solid #329ee0;
    }

    >span {
        font-size: 16px;
        padding: 5px 10px;
    }

}
</style>