import React, { useState, useEffect } from 'react';
import '../Profile.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DragAndDrop from './DragAndDrop'
import { postPush } from '../../../redux/actions/posts/posts'
import { fileRemove, files } from '../../../redux/actions/draganddrop/DragAndDrop'
import Picture from './Picture'
import Video from './Video'

const CreatePostBlock = (props) => {

  const { user, content } = props;
  const [headline, setHeadline] = useState("");
  const [postText, setPostText] = useState("");
  const [postContent, setPostContent] = useState([]);
  const contentEditable = React.createRef();

  useEffect(() => {
    setPostContent(content)
}, [content])

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
            className="form-inputs"
            placeholder="Headline"
            onChange={(e) => { setHeadline(e.target.value) }}
          /> <br />
          <div
            contentEditable
            name="postText"
            id="postText"
            className="form-inputs"
            ref={contentEditable}
            disabled={false}
            onInput={(e) => { setPostText(e.target.innerHTML) }}
          ></div>
          <div className="container p-1">
            <div className="row">
              {postContent.map((item, i) => (
                <div className="col-3 dropped-files-item" key={item.lastModified}>
                  <span className="dropped-files-item-remover" onClick={() => props.fileRemove({ i })}>x</span>
                  {item.type.includes('image') ?
                  <img src={URL.createObjectURL(item)}/> : 
                  item.type.includes('video') ? 
                  <video width="100%" src={URL.createObjectURL(item)}/> :
                  <a href={item.url}>{item.name}</a>}
                </div>
              ))}
              <DragAndDrop />
            </div>
            <div className="d-flex justify-content-between">
              <div className="type-buttons">
                <button className="type-button"
                  onClick={(e) => {
                    e.preventDefault()
                    const a = document.createElement('a');
                    a.href = prompt('Enter URL:');
                    a.title = prompt('Enter URL-title:');
                    window.getSelection().getRangeAt(0).surroundContents(a);
                    setPostText(contentEditable.current.innerHTML)
                  }}
                >
                  hyperlink
                </button>
                <Picture />
                <Video />
                <button
                  className="type-button"
                  onClick={(e) => {
                    e.preventDefault()
                    const str = contentEditable.current.innerHTML
                    const i = document.getSelection().toString()
                    console.log(str)
                    const a = str.replace(i, `#${i}`);
                    contentEditable.current.innerHTML = a;
                    setPostText(contentEditable.current.innerHTML)
                    contentEditable.current.focus();
                  }}
                >
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
                      : props.postPush({ email, headline, postText, 'content': [...content || []] })
                    setHeadline('');
                    contentEditable.current.innerHTML = '';
                   // props.files(null);                   
                    props.history.push('/home/link-accounts')
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
    user: state.userReducer.user,
    content: state.DragAndDropReducer.fileList,
  };
};

const mapDispatchToProps = dispatch => ({
  postPush: data => dispatch(postPush(data)),
  fileRemove: data => dispatch(fileRemove(data)),
  files: data => dispatch(files(data)),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CreatePostBlock)
)




