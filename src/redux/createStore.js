import {reducers} from "./reducers";

export function createStore(rootReducer) {
    let state = reducers({type: 'INIT'});
    const subscribers = [];
    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub());
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state;
        }
    };
}