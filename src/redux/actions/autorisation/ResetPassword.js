import { types } from './Types'

export const reset = data => ({
  type: types.RESET.REQUEST,
  data
})

export const resetSuccess = user => ({
  type: types.RESET.SUCCESS,
  user,
})

export const resetFailure = error => ({
  type: types.RESET.FAILURE,
  error,
})