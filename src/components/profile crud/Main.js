import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop'
import { DragAndDropReducer } from '../../redux/reducers/draganddrop/DragAndDrop'
import firebase from 'firebase'
import { postPush } from '../../redux/actions/posts/posts'
import { storage } from '../../rsf/rsf'

const Main = (props) => {

  const { email, files } = props;
  const [headline, setHeadline] = useState("");
  const [postText, setPostText] = useState("");


  return (
    <div className="col-6 main">
      <div className="main-nav">
        <div className="main-nav-item">Post</div>
        <div className="main-nav-item">Archieve</div>
      </div>
      <div className="create-post-block">
        <form className="create-post-form">
          <input
            name="headline"
            id="headline"
            type="text"
            value={headline}
            className="form-input"
            placeholder="Headline"
            onChange={(e) => { setHeadline(e.target.value) }}
          /> <br/>
          <input
            name="postText"
            id="postText"
            type="text"
            value={postText}
            className="form-input"
            placeholder=""
            onChange={(e) => { setPostText(e.target.value) }}
          />
          <div className="container p-1">
            <div className="row">
              {props.data.fileList.map(f => {
                return (
                  <div className="col-3 dropped-files-item" key={f.lastModified}>
                    <span className="dropped-files-item-remover">x</span>
                    {f.name}
                  </div>
                )
              })}
              <DragAndDrop />
            </div>
            <div className="d-flex justify-content-between">
              <div className="type-buttons">
                <button className="type-button">
                  hyperlink
                </button>
                <button className="type-button">
                  picture
                </button>
                <button className="type-button">
                  Video
                </button>
                <button className="type-button">
                  hashtag
                </button>
              </div>
              <button 
                type="submit"
                className="type-button type-button-submit"
                onClick={
                  (e) => { 
                  e.preventDefault()
                  console.log(headline.trim())
                  !headline.trim() || !postText.trim() ? alert('Empty fields!') 
                  : props.postPush(email, headline, postText, files) 
                  setHeadline('')
                  setPostText('')
                }}
                >
                  to Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.DragAndDropReducer,
    email: state.userReducer.email,
    files: state.DragAndDropReducer.fileList
  };
};

const mapDispatchToProps = {
  postPush
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



