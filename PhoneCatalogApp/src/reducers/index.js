import {combineReducers} from 'redux';
import {PhonesReducer} from '@/reducers/PhonesReducer';

export const rootReducer = combineReducers({
  phones: PhonesReducer,
});
