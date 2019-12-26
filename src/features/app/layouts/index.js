import DefaultLayout from '@/features/app/layouts/default'
import SimpleLayout from '@/features/app/layouts/simple'

export default [
  // 可配置多个布局，建议配置路由前缀，如未配置则以name作为前缀
  { name: 'simple', layout: SimpleLayout, prefix: 'app' },
  // 默认布局放在最后，且只能有一个
  { name: 'default', layout: DefaultLayout, default: true }
]
