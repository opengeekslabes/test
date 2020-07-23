import React from 'react';
import '../Profile.css';
import { connect } from 'react-redux';
import { files } from '../../../redux/actions/draganddrop/DragAndDrop'

const Picture = (props) => {
  
  return (
    <span className="upload-file__wrapper">
        <input 
            type="file" 
            name="picture" 
            id="upload-picture-input" 
            className="upload-picture-input" 
            multiple  
            accept="image/jpeg,image/png,image/gif"
            onChange={(e) => { 
                props.files([e.target.files[0]]) 
            }}    
        />
        <label className="type-button" htmlFor="upload-picture-input">
            picture
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
)(Picture)



