import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import Router from '../router';


const App = reduxifyNavigator(Router, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
