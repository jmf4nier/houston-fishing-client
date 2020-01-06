import React from "react";
import { Provider } from "react-redux";
import {store} from './store'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">Hello</div>
            </Provider>
        );
    }
}
