import {DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLE_BUTTONS} from "./constants";

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

export function disableButtons(isDisabled=true) {
    return {
        type: DISABLE_BUTTONS,
        payload: isDisabled
    }
}


export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disableButtons(true))
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT});
            dispatch(disableButtons(false))
        }, 1000);
    };
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    };
}

