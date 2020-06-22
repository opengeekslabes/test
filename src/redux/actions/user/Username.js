export const typesUser = {
  USERNAME: {
    REQUEST: 'USERNAME.REQUEST',
    SUCCESS: 'USERNAME.SUCCESS'
  },
}

export const userName = name => ({
  type: typesUser.USERNAME.REQUEST,
  name
})

export const userNameSuccess = name => ({
  type: typesUser.USERNAME.SUCCESS,
  name
})