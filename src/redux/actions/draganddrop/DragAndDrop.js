export const typesDragAndDrop = {
  DROP: {
    DROPDEPTH: 'DROP.DROPDEPTH',
    INDROPZONE: 'DROP.INDROPZONE',
    FILETOLIST: 'DROP.FILETOLIST'
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
