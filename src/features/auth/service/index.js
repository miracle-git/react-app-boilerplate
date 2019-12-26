import { DataUtil } from 'm2-core'

export const service = {
  // 模拟登录，注销
  login(username, password) {
    return new Promise((resolve, reject) => {
      resolve({
        username,
        token: DataUtil.randomString()
      })
    })
  },
  logout() {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}
