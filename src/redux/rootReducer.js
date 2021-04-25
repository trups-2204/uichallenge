import { combineReducers } from 'redux';
import { reducer as challengeReducer } from './modules/test.module';

const rootReducer = combineReducers({
    ui: combineReducers({
        challenge: challengeReducer,
    }),
});

export default rootReducer;