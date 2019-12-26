import NotFoundPage from '@/features/common/containers/not-found'

// 多布局时，此处可导出数组，指定每种布局对应的页面
export default {
  path: '',
  name: '公共模块',
  layout: 'simple',
  children: [
    // public: true 代表当前页面不需要认证
    { path: '404', component: NotFoundPage, public: true }
  ]
}
