import { combineReducers } from 'redux';
import { reducer } from './modules/test.module';

const rootReducer = combineReducers({
    ui: combineReducers({
        challenge: reducer,
    }),
});

export default rootReducer;