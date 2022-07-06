import React, { Component } from 'react';
import './App.css';
import Count from './Components/Count';
import {Provider} from 'react-redux';
import store from './redux/store';
import Control from './Components/Control';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h2>Hello</h2>
          <Count/>
          <Control/>
      </div>
      </Provider>
    );
  }
}

export default App;
