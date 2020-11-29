import Layout from '@/layout'
const yzgTest = {
    path: '/yzgs',
    component: Layout,
    redirect: 'noRedirect',
    name: 'yzgs',
    meta: {
      title: '叶宗刚',
      icon: 'table'
    },
    children: [
      {
        path: 'test',
        component: () => import('@/views/yzgs/test.vue'),
        name: 'test',
        meta: { title: '测试' }
      }
    ]
  }
  export default yzgTest
  