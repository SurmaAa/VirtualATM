import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootSaga } from './sagas/saga';
import React, { Component } from 'react';
import reducer from './reducers/reducers';
import Screen from './components/Screen';
import KeyBoard from './components/Keyboard';
import ATM from './components/ATM';
import './css/fontawesome/css/all.min.css';
import GlobalStyle from './css/GlobalCss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ATM>
          <Screen />
          <KeyBoard />
        </ATM>
      </Provider>
    );
  }
}

export default App;
