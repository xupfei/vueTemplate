<template>
    <div class="s-container">
        <div class="center">
            <div class="image">
               
                <div class="bottom"></div>
            </div>
            <div class="sign">
                <div class="content">
                    <div class="denglu">
                        <span class="font">欢迎登录</span>
                    </div>
                    <div class="signInput">
                        <el-input size="small" placeholder="请输入用户名" v-model.trim="userName">
                            <img slot="prefix" src="@/assets/images/me.png" />
                        </el-input>
                        <el-input
                            size="small"
                            type="showpassword"
                            placeholder="请输入密码"
                            v-model.trim="password"
                            @keydown.enter.native="login"
                        >
                            <img slot="prefix" src="@/assets/images/password.png" />
                        </el-input>
                    </div>
                    <div class="bnt" @click="login">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            showpassword: false,
            userName: '',
            password: ''
        }
    },
    methods: {
        openeye() {
            this.showpassword = !this.showpassword
        },

        login() {
            //此处写登陆逻辑
             this.$router.push('/meterial')
          
        }
    }
}
</script>

<style lang="scss" scoped>
.s-container {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/bg@2x.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .center {
        width: 60%;
        height: 66%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        .image {
            display: inline-block;
            width: 60%;
            height: 100%;
            background-image: url('../../assets/images/bg2.png');
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
        .sign {
            display: inline-block;
            width: 40%;
            height: 100%;
            background-color: #fff;
            position: relative;
            .content {
                width: 100%;
                height: 60%;
                padding: 10%;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                padding: 0 30px;
                .denglu {
                    font-size: 30px;
                    color: #000;
                    text-align: center;
                    position: relative;
                    letter-spacing: 4px;
                    .font {
                        &::after {
                            content: '';
                            display: inline-block;
                            width: 110px;
                            height: 2px;
                            background-color: #ff6543;
                            position: absolute;
                            bottom: -5px;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                }
                .signInput {
                    width: 90%;
                    position: absolute;
                    top: 50%;
                    // left:0;
                    transform: translateY(-50%);
                    width: 100%;
                    .el-input {
                        padding-left: 10px;
                        width: calc(100% - 60px);
                        margin-bottom: 30px;
                    }
                    .el-input__inner {
                        border: 0 none;
                        border-bottom: 1px solid #d2d2d2;
                    }
                }
            }
            .bnt {
                position: absolute;
                cursor: pointer;
                width: 60%;
                height: 46px;
                background: #3a3d74;
                border-radius: 27px;
                line-height: 46px;
                text-align: center;
                color: #fff;
                left: 50%;
                transform: translate(-50%, 0);
                bottom: 0;
            }
        }
    }
}
</style>


