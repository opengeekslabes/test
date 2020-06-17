import { types } from './Types'

export const logout = () => ({
  type: types.LOGOUT.REQUEST,
})

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
})

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
})