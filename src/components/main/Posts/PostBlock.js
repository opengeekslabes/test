import React, {useState, useEffect} from 'react';
import '../Profile.css';
import {connect} from 'react-redux';
import actions from '../../../redux/actions/autorisation'
import Post from './Post'
import {withRouter} from 'react-router-dom';
import { postGet } from '../../../redux/actions/posts/posts'

const PostBlock = (props) => {
    useEffect(() => {
        const path = props.user.email.split('').filter(item => item !== '.').join('');
        props.postGet({path})
    }, [])

    const [flag, setFlag] = useState(false);
    
    const posts = props.posts && Object.keys(props.posts).length > 1 ? Object.values(Object.values(props.posts)[0]) : false;
    const id = props.posts && Object.keys(props.posts).length > 1 ? Object.keys(Object.values(props.posts)[0]) : false;
    const photo = props.user.photoURL ? props.user.photoURL : "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697"

    return (

        <div className="col-4 post-block p-0">
            <div className="profile-block d-flex justify-content-end align-items-center">
                <div className="profile-name">{props.user.displayName}</div>
                <div className="profile-photo-container">
                    <img className="profile-photo" src={photo} />
                </div>
                <div className="profile-menu-block">
                    <i className={flag ? "fas fab-post fa-caret-down" : "fas fab-post fa-sort-up"} onClick={() => setFlag(!flag)}></i>
                    <div className={flag ? "profile-menu" : "profile-menu d-none"}>
                        <div className="profile-menu-item mb-1"
                             onClick={() => props.history.push('/home/posts/settings')}>Settings
                        </div>
                        <div className="profile-menu-item" onClick={props.logout}>Log Out</div>
                    </div>
                </div>
            </div>
            <div className="post-block-headline">
                Agenda
            </div>
            <div className={posts ? "post-block-posts" : ''}>
                {posts ? posts.map((item, index) => (
                    <Post
                        key={item.key}
                        item={item}
                        index={index}
                        posts={posts}
                        id={id}
                    />
                )) : ''}
            </div>    
        </div>

    );
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        posts: state.postsReducer.posts,
        url: state.storageReducer.url,
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actions.logout.logout()),
    postGet: data => dispatch(postGet(data)),
 })

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(PostBlock)
)

