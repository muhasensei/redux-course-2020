import {DECREMENT, INCREMENT, ASYNC_INCREMENT} from "./constants";

export function increment() {
    return {
        type: INCREMENT,
    };
}

export function decrement() {
    return {
        type: DECREMENT,
    };
}

export function asyncIncrement() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT})
        }, 1000);
    };
}
