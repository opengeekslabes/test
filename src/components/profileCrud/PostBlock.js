import React, {useState, useEffect} from 'react';
import './Profile.css';
import {connect} from 'react-redux';
import actions from '../../redux/actions/autorisation/'
import Post from './Post'
import {withRouter} from 'react-router-dom';
import { postGet } from '../../redux/actions/posts/posts'

const PostBlock = (props) => {
    useEffect(() => {
        const path = props.user.email.split('').filter(item => item !== '.').join('');
        props.postGet({path})
    }, [])


    const [flag, setFlag] = useState(false);

    const posts = props.posts ? Object.values(props.posts) : false;
    const posts1 = Object.keys(posts).length !== 0 ? Object.values(posts[0]) : false;
    let id;
    let posts2 = []
    if (Object.keys(posts).length !== 0) {
        for (const key of posts) {
            id = Object.keys(key)
        }
        posts2 = [...posts1]
    }

    return (

        <div className="col-4 post-block p-0">
            <div className="profile-block d-flex justify-content-end align-items-center">
                <div className="profile-name">{props.user.displayName}</div>
                <div className="profile-photo"></div>
                <div className="profile-menu-block">
                    <i className={flag ? "fas fa-caret-down" : "fas fa-sort-up"} onClick={() => setFlag(!flag)}></i>
                    <div className={flag ? "profile-menu" : "profile-menu d-none"}>
                        <div className="profile-menu-item mb-1"
                             onClick={() => props.history.push('settings')}>Settings
                        </div>
                        <div className="profile-menu-item" onClick={props.logout}>Log Out</div>
                    </div>
                </div>
            </div>
            <div className="post-block-headline">
                Agenda
            </div>
            {props.posts !== false ? posts2.map((item, index) => (
                <Post
                    key={item.key}
                    item={item}
                    index={index}
                    posts2={posts2}
                    id={id}
                />
            )) : ''}
        </div>

    );
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        posts: state.postsReducer.posts
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

