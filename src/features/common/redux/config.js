// Redux的配置项(用于构建action和initialState)
export default {
  feature: 'common',
  actionKeys: [
    { key: 'dict', data: [], async: false, cache: false, emit: false }
    // data: 初始值，async: 处理异步请求，cache: 数据持久保存(防刷新), emit: 等待数据请求后使用DataBus.on处理其他逻辑
  ]
}
