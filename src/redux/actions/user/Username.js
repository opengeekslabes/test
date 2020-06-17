export const types = {
  USER: {
    NAME: 'USER.NAME',
  },
}

export const userName = name => ({
  type: types.USER.NAME,
  name,
})