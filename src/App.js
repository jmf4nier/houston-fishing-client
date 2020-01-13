import React from "react";
import { Provider } from "react-redux";
import {store} from './store'
import LoginPage from "./components/userForms/Login";
import SignupPage from "./components/userForms/SignUp";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <LoginPage/>
                    <SignupPage/>
                </div>
            </Provider>
        );
    }
}
