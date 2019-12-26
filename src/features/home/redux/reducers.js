import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'
import { reducer as getDataListReducer } from '@/features/home/redux/controllers/getDataList'
import { reducer as getDataItemReducer } from '@/features/home/redux/controllers/getDataItem'

const reducers = [
  getDataListReducer,
  getDataItemReducer
]

const initialState = ReduxFactory.createInitialState(config)

export default (state = initialState, action) => ReduxFactory.createFeatureReducer(reducers, state, action)
