import React, { useState } from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop'
import { postPush } from '../../redux/actions/posts/posts'
import { fileRemove } from '../../redux/actions/draganddrop/DragAndDrop'

const Main = (props) => {

  const { user, files } = props;
  const [headline, setHeadline] = useState("");
  const [postText, setPostText] = useState("");

  return (
    <div className="col-8 main">
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
          /> <br />
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
              {props.data.fileList.map((f, i) => (
                <div className="col-3 dropped-files-item" key={f.lastModified}>
                  <span className="dropped-files-item-remover" onClick={() => props.fileRemove({ i })}>x</span>
                  {f.name}
                </div>
              ))}
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
                    const email = user.email
                    !headline.trim() || !postText.trim() ? alert('Empty fields!')
                      : props.postPush({ email, headline, postText, files })
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
    user: state.userReducer.user,
    files: state.DragAndDropReducer.fileList
  };
};

const mapDispatchToProps = dispatch => ({
  postPush: data => dispatch(postPush(data)),
  fileRemove: data => dispatch(fileRemove(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)



