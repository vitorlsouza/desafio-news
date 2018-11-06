import React from 'react';

import { Container } from './styles';

import Image from '../../assets/news.png';

const NotFound = () => (
  <Container>
    <strong>NOT FOUND</strong>
    <img src={Image} alt="news" />
  </Container>
);

export default NotFound;
