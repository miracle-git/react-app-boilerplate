import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'

const params = { config, actionKey: 'list' }
// 此处如果需要对同一actionKey进行多个Redux业务处理，务必在每个业务中加上不同的actionType以示区分
// const params = { config, actionKey: 'list', actionType: 'get' }
// const params = { config, actionKey: 'list', actionType: 'remove' }

export const action = () => ReduxFactory.createAction(params)
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => action.payload);
