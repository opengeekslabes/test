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

export const userNameSuccess = data => ({
  type: typesUser.USERNAME.SUCCESS,
  data
})