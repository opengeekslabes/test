export const editProfTypes = {
    EDITPROFILE: {
      ACTION: 'EDITPROFILE.ACTION',
      SUCCESS: 'EDITPROFILE.SUCCESS',
      FAIL: 'EDITPROFILE.FAIL',
    },
  }

export const editProfile = data => ({
    type: editProfTypes.EDITPROFILE.ACTION,
    data,
  })
  
export const editProfileSuccess = data => ({
    type: editProfTypes.EDITPROFILE.SUCCESS,
    data,
})
  
export const editProfileFail = data => ({
    type: editProfTypes.EDITPROFILE.FAIL,
    data
})