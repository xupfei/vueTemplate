//文件导航列表
const menuList = [
    {
        name: "内容管理",
        path: "/meter",
        id:1,
        level:1,
        children:[
            {
                id:1-1,
                name: "内容管理",
                path: "/meterial",
                level:2,
                parentName:'内容管理'
            }
        ]
    },
    {
        name: "操作日志",
        path: "/operationlog",
        id:2,
        level:1,
        children: [
            {
                name: "操作日志",
                path: "/operationlog/log",
                id:2-1,
                level:2,
                parentName:'操作日志'
            }
        ]
    },

    {
        name: "系统管理",
        path: "/sys",
        id:3,
        level:1,
        children: [
            {
                name: "用户管理",
                path: "/sys/usermanage",
                id:3-1,
                level:2,
                parentName:'系统管理'
            },
        ]
    },

];




export default menuList