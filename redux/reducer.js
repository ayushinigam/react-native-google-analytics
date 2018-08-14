import {combineReducers} from 'redux';
import Router from '../router';
import { createNavigationReducer} from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(Router);

export default combineReducers({
 nav: navReducer
});
