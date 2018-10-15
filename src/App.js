import React from 'react';

import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';

import './styles/global';
import { Wrapper } from './styles/components';

import Header from './components/Header';
import NewsList from './components/NewsList';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Header />
      <NewsList />
    </Wrapper>
  </Provider>
);

export default App;
