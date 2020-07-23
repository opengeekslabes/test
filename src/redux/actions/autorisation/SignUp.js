import { types } from './Types'

export const signup = (data) => ({
  type: types.SIGNUP.ACTION,
  data,
})
