import React from 'react';

import './styles/global';
import { Wrapper } from './styles/components';

import Header from './components/Header';
import NewsList from './components/NewsList';

const App = () => (
  <Wrapper>
    <Header />
    <NewsList />
  </Wrapper>
);

export default App;
