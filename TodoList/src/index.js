import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import ToDoApp from './app/components/Navigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );
  }
}

export default App;
