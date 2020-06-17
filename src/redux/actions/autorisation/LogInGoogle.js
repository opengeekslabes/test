import { types } from './Types'

export const loginGoogle = () => ({
  type: types.LOGINGOOGLE.REQUEST,
})

export const loginGoogleSuccess = user => ({
  type: types.LOGINGOOGLE.SUCCESS,
  user,
})

export const loginGoogleFailure = error => ({
  type: types.LOGINGOOGLE.FAILURE,
  error,
})
