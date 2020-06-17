import { types } from './Types'

export const signup = (email, password, name) => ({
  type: types.SIGNUP.REQUEST,
  email,
  password,
  name
})

export const signupSuccess = name => ({
  type: types.SIGNUP.SUCCESS,
  name
})

export const signupFailure = error => ({
  type: types.SIGNUP.FAILURE,
  error,
})