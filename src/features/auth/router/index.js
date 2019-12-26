import UserLoginPage from '@/features/auth/containers'

export default {
  path: 'auth',
  name: '认证模块',
  layout: 'simple',
  children: [
    { name: '登录页', component: UserLoginPage, path: 'login', public: true }
  ]
}
