import { typesDragAndDrop } from '../../actions/draganddrop/DragAndDrop'

const initialState = {
  dropDepth: 0,
  inDropZone: false,
  fileList: []
}

export function DragAndDropReducer(state = initialState, action) {
  switch (action.type) {
    case typesDragAndDrop.DROP.DROPDEPTH:
      return {
        ...state,
        dropDepth: action.data
      }
    case typesDragAndDrop.DROP.INDROPZONE: {

      return {
        ...state,
        inDropZone: action.data
      };
    }
    case typesDragAndDrop.DROP.FILETOLIST:
      return {
        ...state,
        fileList: state.fileList.concat(action.data)
      };
    default:
      return state;
  }
};
