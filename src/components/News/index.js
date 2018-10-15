import React from 'react';
import Proptypes from 'prop-types';

import {
  Link, Container, Image, Content,
} from './styles';

const News = ({ data }) => (
  <Link href={data.url}>
    <Container>
      <Image>{data.urlToImage !== null ? <img src={data.urlToImage} alt="news" /> : null}</Image>
      <Content>
        <span>{data.publishedAt}</span>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <strong>{data.author}</strong>
      </Content>
    </Container>
  </Link>
);

News.propTypes = {
  data: Proptypes.shape({
    url: Proptypes.string,
    urlToImage: Proptypes.string,
    publishedAt: Proptypes.string,
    title: Proptypes.string,
    description: Proptypes.string,
    author: Proptypes.string,
  }).isRequired,
};

export default News;
