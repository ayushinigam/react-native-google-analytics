import React, {Component} from 'react';
import {Provider} from 'react-redux';
import getStore from './redux/store';
import WrapperRouter from './components/Router.component';

const store = getStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <WrapperRouter/>
      </Provider>
    );
  }
}

export default App;
