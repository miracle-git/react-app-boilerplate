import { ReduxFactory } from 'm2-redux'
import rootReducer from '@/features/app/redux/reducers'

const store = ReduxFactory.createStore(rootReducer)
const checkIsAuth = () => store.getState().auth.loginUser.authenticated

export default {
  store,
  checkIsAuth
}
