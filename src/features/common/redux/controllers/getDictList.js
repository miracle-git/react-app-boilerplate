import { ReduxFactory } from 'm2-redux'
import config from '@/features/common/redux/config'
import { commonService } from '@/features/app/service'

const params = { config, actionKey: 'dict' }
const promise = commonService.getDictList

export const action = () => ReduxFactory.createAsyncAction(promise, params)
export const reducer = (state, action) => ReduxFactory.createAsyncReducer(state, action, params)
export const type = ReduxFactory.createActionType(params)
