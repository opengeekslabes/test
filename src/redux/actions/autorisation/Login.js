import { types } from './Types'

export const login = (email, password) => ({
  type: types.LOGIN.ACTION,
  email,
  password,
})

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user
})

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
})