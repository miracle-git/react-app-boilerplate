import HomePage from '@/features/home/containers'

// 多布局时，此处可导出数组，指定每种布局对应的页面
export default {
  path: '',
  name: '首页模块',
  children: [
    { name: '默认页', component: HomePage, default: true }
  ]
}
