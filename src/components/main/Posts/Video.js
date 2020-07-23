import React from 'react';
import '../Profile.css';
import { connect } from 'react-redux';
import { files } from '../../../redux/actions/draganddrop/DragAndDrop'

const Video = (props) => {
  
  return (
    <span className="upload-file__wrapper">
        <input 
            type="file" 
            name="video" 
            id="upload-video-input" 
            className="upload-picture-input" 
            multiple  
            accept="video/*"
            onChange={(e) => { 
                props.files([e.target.files[0]]) 
            }}    
        />
        <label className="type-button" htmlFor="upload-video-input">
            Video
        </label>
    </span>
  );
}

const mapDispatchToProps = dispatch => ({
  files: data => dispatch(files(data)),
})

export default connect(
  null,
  mapDispatchToProps
)(Video)
