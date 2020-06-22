import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { connect } from 'react-redux';
import DragAndDrop from './DragAndDrop'
import { DragAndDropReducer } from '../../redux/reducers/draganddrop/DragAndDrop'
import store from '../../redux/store/store'

const Main = (props) => {
  const [headline, setHeadline] = useState("Headline");
  const [postText, setPostText] = useState("");

  console.log(props.data.fileList)

  return (
    <div className="col-6 main">
      <div className="main-nav">
        <div className="main-nav-item">Post</div>
        <div className="main-nav-item">Archieve</div>
      </div>
      <div className="create-post-block">
        <form className="create-post-form">
          <input
            required
            name="headline"
            id="headline"
            type="text"
            value={headline}
            className="form-input"
            placeholder="Headline"
            onChange={(e) => { setHeadline(e.target.value) }}
          /> <br/>
          <input
            required
            name="postText"
            id="postText"
            type="text"
            value={postText}
            className="form-input"
            placeholder=""
            onChange={(e) => { setPostText(e.target.value) }}
          />
          <div className="container">
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
            <div>
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
              <button className="drag-and-drop-button">

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
    data: state.DragAndDropReducer

  };
};

//const mapDispatchToProps = {
//  logout
//}

export default connect(
  mapStateToProps,
//  mapDispatchToProps
)(Main)



