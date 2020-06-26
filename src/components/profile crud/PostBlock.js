import React, {useState, useEffect} from 'react';
import firebase from 'firebase'
import './Profile.css';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/autorisation/Logout'
import { DragAndDropReducer } from '../../redux/reducers/draganddrop/DragAndDrop'
import store from '../../redux/store/store'
import rsf from '../../rsf/rsf' 
import { postGet, postRemove } from '../../redux/actions/posts/posts'

const PostBlock = (props) => {


    const [flag, setFlag] = useState(false);
    //добираюсь до постов в фаербейсе
        const posts = props.posts ? Object.values(props.posts) : false;
        const posts1 = Object.keys(posts).length !== 0 ? Object.values(posts[0]) : false;
        let id;
        let posts2 = []
        if(Object.keys(posts).length !== 0){
                for (const key of posts) {
                id = Object.keys(key)
            }
            posts2 = [...posts1]
        }

        console.log(props.name)

    return (
        <div className="col-4 post-block p-0">
            <div className="profile-block d-flex justify-content-end align-items-center">
                <div className="profile-name">{props.name}</div>
                <div className="profile-photo"></div>
                <div className="profile-menu-block">
                    <i className={flag ? "fas fa-caret-down" : "fas fa-sort-up"} onClick={() => setFlag(!flag)}></i>
                    <div className={flag ? "profile-menu" : "profile-menu d-none"}>
                        <div className="profile-menu-item mb-1">Settings</div>
                        <div className="profile-menu-item" onClick={props.logout}>Log Out</div>
                    </div>
                </div>
            </div>
            <div className="post-block-headline">
                Agenda
            </div>


            {props.posts !== false ? posts2.map((item, index) => (
                <div
                  key={item.key}
                  className=""
                >
                    <div className="postDate">
                        {item.postDate}
                    </div>
                    <div className="post-card">
                        <div className="post-top d-flex justify-content-between align-items-center">
                            <div className="post-headline">
                                {item.postHeadline}
                            </div>
                            <div className="post-remover">
                                <i className="fas fa-trash" onClick={() => {console.log(posts2) 
                                    props.postRemove(props.email, id[index])}}></i>
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
              )) : ''}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        name: state.userReducer,
        email: state.userReducer.email,
        posts: state.postsReducer.posts
    };
  };

const mapDispatchToProps = {
    postGet,
    logout,
    postRemove
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostBlock)

