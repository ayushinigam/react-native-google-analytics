import screenTracking from 'redux-ga-screen-tracker';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducer';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import {getScreenTrackingConfig} from '../utils/analytics.utils';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const enhancer = compose(applyMiddleware(middleware, screenTracking(getScreenTrackingConfig())));

export default function getStore (initalState = {}) {
  const store = createStore(reducer, initalState, enhancer);
  return store;
}
