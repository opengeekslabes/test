import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import actions from '../../../redux/actions/autorisation'
import {connect} from 'react-redux';

class PrivateRoute extends React.Component {
    componentDidMount() {
        if(!this.props.user) {
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
                        if (isFetching && isRefreshUserFailed === false) {
                            return (
                                <>
                                    LODADING...
                                </>
                            );
                        }

                        if (this.props.user !== null) {
                            return <Component />
                        }

                        return <Redirect {...props} to="/"/>;
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

const mapDispatchToProps = (dispatch) => {
    return ({
        refreshUserData: () => dispatch(actions.userActions.refreshUserData()),
    });
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));