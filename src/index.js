import './styles.css'
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {decrement, increment} from "./redux/actions";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');

const store = createStore(rootReducer, {
    counter: 0,
});


addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {

});

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state.counter.toString();
});

store.dispatch({type: 'INIT'})
