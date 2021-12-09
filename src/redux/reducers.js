import {DISABLE_BUTTONS, INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME} from "./constants";
import {combineReducers} from "redux";
const initialState = {
    counter:0,
    theme: 'light',
    isDisabled: false,
}
function counterReducer(state= initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case ASYNC_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
}


function themeReducer(state= initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case DISABLE_BUTTONS:
            return {
                ...state,
                isDisabled: action.payload,
            }
        default:
            return state;
    }
}

export const reducers = combineReducers({
    counterReducer,
    themeReducer,
})