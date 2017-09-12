import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";

import storage from './src/utils/storage'
import getStore from "./src/store";
import { AppNavigator } from './src/router';

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const mapStateToProps = (state) => ({
    nav: state.nav
});

class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

export default function Root() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
