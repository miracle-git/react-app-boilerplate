import React from 'react'
import './index.less'

export default () => (
  <div className="not-found-page">
    <h2>404</h2>
    <button className="btn btn-primary" onClick={()=>location.hash='/'}>返回首页</button>
  </div>
)
