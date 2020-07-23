import { types } from '../autorisation/Types'

export const getUserData = () => ({
  type: types.USER.REQUEST,
})

export const setUserData = (data) => ({
  type: types.USER.RESPONSE,
  data,
})

export const refreshUserData = () => ({
  type: types.REFRESH.ACTION,
})

export const refreshUserFail = () => ({
  type: types.REFRESH.FAIL,
})

export const userError = () => ({
  type: types.USER.ERROR,
})
