import { ReduxFactory } from 'm2-redux'
import config from '@/features/common/redux/config'
import { reducer as getDictListReducer } from '@/features/common/redux/controllers/getDictList'

const reducers = [
  getDictListReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
