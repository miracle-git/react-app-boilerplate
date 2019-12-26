import React from 'react'
import { DataStorage, SYMMETRIC_CRYPTO_TYPE } from 'm2-core'
import { connect } from 'm2-redux'
import { authService } from '@/features/app/service'
import { userLogin } from '@/features/auth/redux/actions'
import './index.less'

@connect({ actions: { userLogin } })
class UserLoginPage extends React.Component {
  async handleLogin() {
    const result = await authService.login('Miracle', 123)
    if (result) {
      const { userLogin, history } = this.props
      const { username, token }= result

      DataStorage.set('app-access-token', token, { encryptType: SYMMETRIC_CRYPTO_TYPE.DES })
      userLogin({ username, authenticated: true })
      history.push('')
    }
  }

  render() {
    return (
      <div className="user-login-page">
        <div className="profile">
          <button className="btn btn-info" onClick={()=>this.handleLogin()}>Login</button>
        </div>
      </div>
    )
  }
}

export default UserLoginPage
