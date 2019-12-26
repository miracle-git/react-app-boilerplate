import { ReduxFactory } from 'm2-redux'
import config from '@/features/home/redux/config'

const params = { config, actionKey: 'item' }

export const action = (itemId) => ReduxFactory.createAction(params, { itemId })
export const reducer = (state, action) => ReduxFactory.createReducer(state, action, params, () => action.payload);
