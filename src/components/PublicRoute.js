import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../redux/actions/autorisation/'

class PublicRoute extends React.Component {
    componentDidMount() {
        if (!this.props.user) {
           this.props.refreshUserData();
        }
    }

    render() {
        const {
            component: Component, user, isFetching, isRefreshUserFailed, ...rest
        } = this.props;

        return (
            <>
                <Route
                    {...rest}
                    render={(props) => {
                        if ((isFetching) && !isRefreshUserFailed) {
                            return (
                                <>
                                    LODADING...
                                </>
                            );
                        }

                        if (user === null || isRefreshUserFailed === true) {
                            return <Component/>
                        }

                        return <Redirect {...props} to="/home/posts/create-post"/>;
                    }}
                />
            </>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    isFetching: state.userReducer.isFetching,
    isRefreshUserFailed: state.userReducer.isRefreshUserFailed,
});

const mapDispatchToProps = (dispatch) => ({
    refreshUserData: () => dispatch(actions.userActions.refreshUserData()),
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicRoute));