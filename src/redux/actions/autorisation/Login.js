import { types } from './Types'

export const login = data => ({
  type: types.LOGIN.ACTION,
  data,
})
