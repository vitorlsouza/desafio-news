import React from 'react';

import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';

import './styles/global';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    {/* <Wrapper> */}
    <Routes />
    {/* </Wrapper> */}
  </Provider>
);

export default App;
