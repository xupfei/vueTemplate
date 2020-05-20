<template>
    <el-container style="height:100%">
        <el-aside style="width:200px;height:100%">
            <el-menu
                style="height:100%"
                router
                unique-opened
                :default-active="$route.matched[$route.matched.length-1].meta.parentshow ||$route.matched[$route.matched.length-1].path"
            >
                <el-submenu :index="item.name" v-for="item in menuList" :key="item.id">
                    <template slot="title">
                        <div @click="handlePath(item)">
                            <img :src="item.icon" />
                            &nbsp;{{item.name}}
                        </div>
                    </template>
                    <el-menu-item
                        :index="itemchild.path"
                        v-for=" itemchild in item.children"
                        :key="itemchild.id"
                        @click="handlePath(itemchild)"
                    >&nbsp;&nbsp;&nbsp;{{itemchild.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <!--导航栏-->
            <el-header style="padding:0">
                <navigation ref="nav"></navigation>
            </el-header>
            <!-- 面包屑 -->
            <el-breadcrumb separator=">" style="padding:30px 0 20px 30px;background:#F2F2F2">
                <el-breadcrumb-item
                    style="color:#F2F2F2"
                    v-for="(item,index) in navArr"
                    :key="index"
                >{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-main>
                <el-scrollbar style="height:100%" class="asideScrollerBar">
                    <router-view></router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
//引入假数据
import menuList from '@/mock/menuMock.js';
//导航
import navigation from './navigation';
export default {
    components: { navigation },
    data() {
        let navArr = [];
        let func = menu => {
            navArr[menu.level - 1] = menu.name;
            if (Array.isArray(menu.children)) {
                func(menu.children[0]);
            }
        };
        //第一次进入默认第一个路由
        func(menuList[0]);
        return {
            menuList,
            navArr,
            middleArr: []  //中间变量保存面包屑导航
        };
    },
    methods: {
        //处理面包屑导航
        handlePath(item) {
            this.middleArr[item.level - 1] = item.name;
            //只有在点击最后的一级是面包屑才会改变
            if (!Array.isArray(item.children)) {
                this.middleArr.splice(item.level);
                this.navArr =[...this.middleArr] ;
            }
        }
    }
};
</script>


