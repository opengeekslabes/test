import React, { useState, useEffect } from 'react';
import './LinkAccounts.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserToken, getUserLLToken, getFbPages, postToFB, getFbPagesDatabase } from '../../redux/actions/linkaccounts/linkaccounts'
import { files } from '../../redux/actions/draganddrop/DragAndDrop'

const LinkAccounts = (props) => {
    const FB = window.FB;
    const [accessToken, setAccessToken] = useState(null)
    const [userID, setuserID] = useState(null)
    const [chosenAccounts, setChosenAccounts] = useState({})

    const path = props.user.email.split('').filter(item => item !== '.').join('');
    useEffect(() => {
      props.getFbPagesDatabase({ path });
    },[])
    const postProps = props.postProps;

    return (
        <div className="col-9 link-accounts">
            <div className="link-accounts-block create-post-form">
                <div className="link-accounts-headline">Link your social media accounts to the project</div>
                <div className="link-accounts-description">Link as many of your social media profiles</div>
                <div className="chosen-accounts">
                    {props.fbPages ? props.fbPages.map((item, index) =>
                        <div className="chosen-account" key={item.key}>
                            <div className="chosen-account-picture-container">
                                <img className="chosen-account-picture" src={item.picture} />
                                <i className="fab fa-facebook social-account-mini"></i>
                            </div>

                            <div className="chosen-account-description">
                                <span className="chosen-account-name">
                                    {item.name}
                                </span>
                                <span className="chosen-account-type">
                                    Business account
                                </span>
                            </div>
                            <input className="chosen-account-checkbox" type="checkbox"
                                onChange={() => {
                                    const id = item.id;
                                    const obj = Object.assign({}, chosenAccounts);
                                    if(obj.hasOwnProperty(id)) {
                                        delete obj[id];
                                    } else {
                                        obj[id] = item.access_token;
                                    }
                                    setChosenAccounts(obj)
                                }}
                            ></input>
                        </div>
                    ) : ''}
                </div>
                <div className="social-accounts-links">
                    <p className="social-accounts-links-headline">Link more profiles</p>
                    <div className="social-accounts-buttons">
                        <div className="social-account-button"
                            onClick={() => {
                                FB.login(function (response) {
                                    if (response.status === 'connected') {
                                        const userID = response.authResponse.userID;
                                        const userAccessToken = response.authResponse.accessToken;
                                        setAccessToken(userAccessToken);
                                        setuserID(userID);
                                        props.setUserToken({ userID, userAccessToken })
                                        props.getUserLLToken({ userAccessToken, path, userID })
                                        props.getFbPages({ path, userID})
                                    } else {
                                    }
                                }, {
                                    scope: `pages_manage_ads, pages_manage_metadata, pages_read_engagement,
                                  pages_read_user_content, pages_manage_posts, pages_manage_engagement, publish_to_groups, user_posts`});
                            }}>
                            <i className="fab fa-2x fa-facebook social-account-icon"></i>
                            Connect
                        </div>


                        <div className="social-account-button">
                            <i className="fab fa-instagram-square fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-twitter-square fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-tumblr-square fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-youtube fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-linkedin fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-vk fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-odnoklassniki fa-2x social-account-icon"></i>
                            Connect
                        </div>
                        <div className="social-account-button">
                            <i className="fab fa-telegram fa-2x social-account-icon"></i>
                            Connect
                        </div>
                    </div>

                </div>
            </div>
            <div className="social-accounts-footer">
                <button className="social-accounts-footer-button"
                    onClick={() => props.history.push('/home/posts/create-post')}
                >
                    Back
                    </button>
                <button className="social-accounts-footer-button"
                    onClick={() => {
                        props.postToFB({chosenAccounts, postProps})
                        props.files([]);
                        props.history.push('/home/posts/create-post')
                    }}
                >
                    Skip
                    </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    fbPages: state.linkAccountsReducer.fbPages,
    postProps: state.linkAccountsReducer.postProps,
});

const mapDispatchToProps = dispatch => ({
    setUserToken: data => dispatch(setUserToken(data)),
    getUserLLToken: data => dispatch(getUserLLToken(data)),
    getFbPages: data => dispatch(getFbPages(data)),
    getFbPagesDatabase: data => dispatch(getFbPagesDatabase(data)),
    postToFB: data => dispatch(postToFB(data)),
    files: data => dispatch(files(data)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(LinkAccounts)
)




