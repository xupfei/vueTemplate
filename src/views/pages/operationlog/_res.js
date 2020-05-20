const routeArr= [
    {
        path: "/operationlog",
       
        component: resolve => require(["@/views/layout"], resolve),
        meta: { show: "/operationlog", theme: "操作日志", title: "操作日志" },
        children: [
            {
                path: "log",
                component: resolve => require(["@/views/pages/operationlog/log"], resolve),
                meta: { show: "/operationlog/log",  theme: "操作日志",title: "操作日志" }
            }
        ]
    }
]

export default routeArr
