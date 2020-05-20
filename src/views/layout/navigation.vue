<template>
    <div class="navigat">
        <div class="left">
            <span style="fontSize:14px">欢迎您!&nbsp;{{userName||'游客'}}</span>
        </div>
        <div style="right">
            <el-tooltip content="退出登录" placement="bottom" effect="light">
                <img src="@/assets/images/cancel.png" alt="退出登录" @click="signOut" />
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: ''
        }
    },
    methods: {
        //退出登录
        signOut() {
            this.$router.push('/login')
        }
    },
    mounted() {
        // const userName = JSON.parse(sessionStorage.getItem('userInfo'))
        // this.userName = userName
    }
}
</script>

<style lang="scss" scoped>
.navigat {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
    height: 60px;
    line-height: 60px;
    padding-right: 50px;
    .left {
        img {
            margin-right: 14px;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
}
</style>
