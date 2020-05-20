const routerArr = [
	{
		path: '/meter',
		component: resolve => require(['@/views/layout'], resolve),
		meta: { show: '/meter', title: '内容管理' },
		children: [
			{
				path: '/meterial',
				name: 'meterial',
				component: resolve => require(['@/views/pages/meterial/meterialList'], resolve),
				meta: { show: '/meterial', title: '内容管理', theme: '内容管理', parentshow: '/meterial' }
			},
		
		]
	}
];

export default routerArr;
