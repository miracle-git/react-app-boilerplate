import React from 'react'
import { connect } from 'm2-redux'
import { authService } from '@/features/app/service'
import { clearRedux } from '@/features/app/redux/actions'
import { userLogout } from '@/features/auth/redux/actions'
import { getDataList, getDataItem } from '@/features/home/redux/actions'
import './index.less'

@connect({ reducers: ['home', 'auth'], actions: { getDataList, getDataItem, clearRedux, userLogout } })
class HomePage extends React.Component {
  state = {
    // define the stateless data
  }

  fields = {
    // define the immutable  data
  }

  static propTypes = {
    // define props data type
  }

  componentDidMount() {
    // fetch the data from server
    // this.props.getDataList()
  }

  async handleLogout() {
    const result = await authService.logout()
    if (result) {
      const { userLogout, clearRedux, history } = this.props
      userLogout({ username: '', authenticated: false })
      clearRedux()
      history.push('/auth/login')
    }
  }

  render() {
    const { loginUser } = this.props.auth

    return (
      <div className="home-page">
        <span>Welcome，{loginUser.username}</span>
        <button className="btn btn-danger"  style={{marginLeft:10}} onClick={()=>this.handleLogout()}>Logout</button>
        <h2>React project has been ready, let's start!!!!</h2>
        <img src="/static/img/app-arch.png" alt="React Architect"/>
      </div>
    )
  }
}

export default HomePage
