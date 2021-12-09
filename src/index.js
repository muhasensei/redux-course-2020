import './styles.css'
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./redux/reducers";
import {asyncIncrement, changeTheme, decrement, disableButtons, increment} from "./redux/actions";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);


addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    store.dispatch(changeTheme(newTheme));
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counterReducer.counter.toString();
    document.body.className = state.themeReducer.theme.toString();
    [addBtn, subBtn, themeBtn, asyncBtn].forEach(btn => {
        btn.disabled = state.themeReducer.isDisabled;
    });
});

store.dispatch({type: 'INIT'})
