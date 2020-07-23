import React, { useState, useEffect } from 'react';
import './LinkAccounts.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserToken, getFbPages } from '../../redux/actions/linkaccounts/linkaccounts'

const LinkAccounts = (props) => {
    const FB = window.FB;
    const [accessToken, setAccessToken] = useState('')
    const [userId, setUserId] = useState('')
    const path = props.user.email.split('').filter(item => item !== '.').join('');

    // useEffect(() => {
    //     props.getFbPages({ accessToken, userId, path })
    //   }, [userId]); // Only re-run the effect if count changes

    console.log(userId)
    console.log(path)

    return (
        <div className="col-9 link-accounts">
            <div className="link-accounts-block create-post-form">
                <div className="link-accounts-headline">Link your social media accounts to the project</div>
                <div className="link-accounts-description">Link as many of your social media profiles</div>
                <div className="chosen-accounts">
                    
                    {props.fbPages.fbPages ? props.fbPages.fbPages.map((item) =>
                        <div className="chosen-account">

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
                            <input className="chosen-account-checkbox" type="checkbox"></input>
                        </div>
                        ): ''}
                        
                    




                </div>
                <div className="social-accounts-links">
                    <p className="social-accounts-links-headline">Link more profiles</p>
                    <div className="social-accounts-buttons">
                        <div className="social-account-button"
                            onClick={() => props.getUserToken({path})}>
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

        </div>
    );
}

//const Image = ({ data }) => <img src={`data:image/jpeg;base64,${btoa(unescape(encodeURIComponent(data)))}`} />




const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    fbPages: state.linkAccountsReducer.fbPages,
});

const mapDispatchToProps = dispatch => ({
    getUserToken: data => dispatch(getUserToken(data)),
    getFbPages: data => dispatch(getFbPages(data)),
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(LinkAccounts)
)




