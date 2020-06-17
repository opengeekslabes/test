import { types } from './Types'

export const loginFB = () => ({
  type: types.LOGINFB.REQUEST,
})

export const loginFBSuccess = data => ({
  type: types.LOGINFB.SUCCESS,
  data,
})

export const loginFBFailure = error => ({
  type: types.LOGINFB.FAILURE,
  error,
})
