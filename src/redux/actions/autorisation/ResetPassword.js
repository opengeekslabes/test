import { types } from './Types'

export const reset = email => ({
  type: types.RESET.REQUEST,
  email
})

export const resetSuccess = user => ({
  type: types.RESET.SUCCESS,
  user,
})

export const resetFailure = error => ({
  type: types.RESET.FAILURE,
  error,
})