import React from 'react';
import '../Profile.css'
import { dropDepth, inDropZone, files } from '../../../redux/actions/draganddrop/DragAndDrop'
import { connect } from 'react-redux';

const DragAndDrop = props => {
  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
    props.dropDepth(1)
  };
  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
    props.dropDepth(-1)
    
    if (props.data.dropDepth > 0) return
    props.inDropZone(false) 
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    props.inDropZone(true);
  };
  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    let files = [...e.dataTransfer.files];
  
    if (files && files.length > 0) {
      const existingFiles = props.data.fileList.map(f => f.name)
      files = files.filter(f => !existingFiles.includes(f.name))
      
      props.files(files);
      e.dataTransfer.clearData();
      props.dropDepth(0)
      props.inDropZone(false) 
    }
  };
  return (
    <div>
      <input 
        type="file" 
        name="drag-drop" 
        id="drag-drop-input" 
        className="drag-drop-input" 
        onChange={(e) => { 
          props.files([e.target.files[0]]) 
        }}    
      />
      <label 
          htmlFor="drag-drop-input"
          className={props.data.inDropZone ? 'drag-drop-zone inside-drag-area col-3 p-0' : 'drag-drop-zone col-3 p-0'}
          onDrop={e => handleDrop(e)}
          onDragOver={e => handleDragOver(e)}
          onDragEnter={e => handleDragEnter(e)}
          onDragLeave={e => handleDragLeave(e)}
        >
        <span>+</span>
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    fileList: state.DragAndDropReducer,
    data: state.DragAndDropReducer

  };
};

const mapDispatchToProps = {
  dropDepth,
  inDropZone,
  files
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragAndDrop)


