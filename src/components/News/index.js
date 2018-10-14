import React from 'react';
import { Container, Image, Content } from './styles';

const News = ({ data }) => (
  <Container>
    <Image>{data.urlToImage !== null ? <img src={data.urlToImage} alt="news" /> : null}</Image>
    <Content>
      <span>{data.publishedAt}</span>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <strong>{data.author}</strong>
    </Content>
  </Container>
);

export default News;
