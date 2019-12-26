import { ReduxFactory } from 'm2-redux'
import commonReducer from '@/features/common/redux/reducers'
import authReducer from '@/features/auth/redux/reducers'
import homeReducer from '@/features/home/redux/reducers'

const reducerMap = {
  common: commonReducer,
  auth: authReducer,
  home: homeReducer
}

export default (state, action) => ReduxFactory.createAppReducer(reducerMap, state, action);
