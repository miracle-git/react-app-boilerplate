// Redux的配置项(用于构建action和initialState)
export default {
  feature: 'auth',
  actionKeys: [
    { key: 'loginUser', data: { username: '', authenticated: false }, cache: true }
  ]
}
