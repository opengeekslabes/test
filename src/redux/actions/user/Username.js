export const typesUser = {
  USERNAME: {
    REQUEST: 'USERNAME.REQUEST',
    SUCCESS: 'USERNAME.SUCCESS'
  },
}

export const userName = email => ({
  type: typesUser.USERNAME.REQUEST,
  email
})

export const userNameSuccess = user => ({
  type: typesUser.USERNAME.SUCCESS,
  user
})