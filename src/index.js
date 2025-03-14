import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
    root.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />
    );
}

rerenderDOM(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state);
});
