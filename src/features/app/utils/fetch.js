import { DataType, DataFetch, DataUtil, FETCH_DEFAULT_OPTIONS } from 'm2-core'
import env from '@/features/app/constants/env.conf'

const _fetch = (url, options) => {
  const _opts = {
    ...FETCH_DEFAULT_OPTIONS,
    ...options
  }

  const $indicator = document.getElementById('indicator')
  _opts.loading && ($indicator.style.display = 'block')

  return new Promise((resolve, reject) => {
    return DataFetch.request(url, {
      env,
      // apiKey: 'app', // 当存在多个api接口时，配置默认的apiKey(大多数场景使用的api服务)
      ..._opts
    }).then(res => {
      _opts.loading && ($indicator.style.display = 'none')
      if (res.code === 0) {
        if (res.result) {
          if (_opts.key) {
            if (DataType.isArray(res.result)) {
              res.result.map(item => item._key = DataUtil.randomString(_opts.keyLen))
            } else if (DataType.isArray(res.result.list)) {
              res.result.list.map(item => item._key = DataUtil.randomString(_opts.keyLen))
            }
          }
          resolve(res.result)
        } else {
          resolve(res)
        }
      } else {
        reject({
          title: `接口:[${url}]调用失败`,
          message: res.msg
        })
      }
    }).catch(err => {
      _opts.loading && ($indicator.style.display = 'none')
      reject({
        title: `接口:[${url}]调用失败`,
        message: err.msg || err
      })
    })
  })
}

export const get = (url, options = {}) => _fetch(url, options)
export const post = (url, options = {}) => _fetch(url, {...options, method: 'post'})
