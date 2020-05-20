
const routerArr= [
    {
        path: "/sys",
        component: resolve => require(["@/views/layout"], resolve),
        meta: { show: "/sys", theme: "系统管理", title: "系统管理" },
        children: [
            {
                path: "/sys/usermanage",
                component: resolve => require(["@/views/pages/sysmanage/index.vue"], resolve),
                meta: { show: "/sys/usermanage",  theme: "用户管理",title: "用户管理",parentshow: '/sys/usermanage' }
            },
   
        
        ]
    }
]

export default routerArr;
