import { loadRoutesConfig } from 'm2-react'
import App from '@/features/app/containers'
// import { loadLayoutRoutesConfig } from 'm2-react'
// import layouts from '@/features/app/layouts'
import commonRouter from '@/features/common/router'
import homeRouter from '@/features/home/router'
import authRouter from '@/features/auth/router'

// 支持单一布局的配置(不需要单独配置layouts, 只需要App作为容器即可)
const routes = loadRoutesConfig(App, [
  commonRouter,
  homeRouter,
  authRouter
])

export default {
  routes,
  routeType: 'hash',
  redirectUrl: '/auth/login',
  redirect404: '/404'
}

// const routes = loadLayoutRoutesConfig(layouts, [
//   commonRouter,
//   homeRouter,
//   authRouter
// ])

// export default {
//   routes,
//   routeType: 'hash',
//   redirectUrl: '/app/auth/login',
//   redirect404: '/app/404'
// }
