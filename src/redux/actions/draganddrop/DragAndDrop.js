export const typesDragAndDrop = {
  DROP: {
    DROPDEPTH: 'DROP.DROPDEPTH',
    INDROPZONE: 'DROP.INDROPZONE',
    FILETOLIST: 'DROP.FILETOLIST',
    REMOVE: 'DROP.REMOVE'
  },
}

export const dropDepth = data => ({
  type: typesDragAndDrop.DROP.DROPDEPTH,
  data
})

export const inDropZone = data => ({
  type: typesDragAndDrop.DROP.INDROPZONE,
  data
})

export const files = data => ({
  type: typesDragAndDrop.DROP.FILETOLIST,
  data
})

export const fileRemove = data => ({
  type: typesDragAndDrop.DROP.REMOVE,
  data
})
