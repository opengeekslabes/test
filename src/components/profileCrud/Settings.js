import React, {useState} from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop'
import { postPush } from '../../redux/actions/posts/posts'
import { fileRemove } from '../../redux/actions/draganddrop/DragAndDrop'

const Settings = (props) => {

  return (
    <div className="col-8 main">
        Henlo
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.DragAndDropReducer,
    user: state.userReducer.user,
    files: state.DragAndDropReducer.fileList
  };
};

const mapDispatchToProps = {
  postPush,
  fileRemove
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

