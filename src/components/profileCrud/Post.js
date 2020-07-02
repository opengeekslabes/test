import React from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { postRemove } from '../../redux/actions/posts/posts'

const Post = (props) => {
    const { key, item, index, posts2, id } = props;
    return (
        <div key={key}>
            <div className={item.postDate === (posts2[index - 1] ? posts2[index - 1].postDate : false) 
                ? "d-none" 
                : "postDate"}>
                {item.postDate}
            </div>
            <div className="post-card">
                <div className="post-top d-flex justify-content-between align-items-center">
                    <div className="post-headline">
                        {item.postHeadline}
                    </div>
                    <div className="post-remover">
                        <i className="fas fa-trash" onClick={() => { 
                            const email = props.user.email;
                            const ind = id[index];
                            props.postRemove({email, ind})
                        }}></i>
                    </div>
                </div>
                <div className="postText">
                    {item.postText}
                </div>
                <div className="post-bottom d-flex justify-content-between align-items-center">
                    <div className="social-links d-flex align-items-center">
                        <span className="post-bottom-text mr-1">socials:</span>
                        <i className="fab fa-facebook mr-1"></i>
                        <i className="fab fa-telegram mr-1"></i>
                        <i className="fab fa-vk"></i>
                    </div>
                    <div className="postTime">
                        <span className="post-bottom-text">Post time:</span> {item.postTime}
                    </div>
                </div>
            </div>
        </div>    
    );
}


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    };
  };

const mapDispatchToProps = (dispatch) => ({
    postRemove: (data) => dispatch(postRemove(data)),

 })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)


