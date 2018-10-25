import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  Link, Container, Image, Content,
} from './styles';

const News = ({ data }) => (
  <Link href={data.url}>
    <Container>
      <Image>{data.urlToImage !== null ? <img src={data.urlToImage} alt="news" /> : null}</Image>
      <Content>
        <span>{moment(data.publishedAt.substr(0, 10)).format('DD/MM/YYYY')}</span>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {data.author ? (
          <h4>
POR :
            {` ${data.author}`}
          </h4>
        ) : null}
      </Content>
    </Container>
  </Link>
);

News.propTypes = {
  data: PropTypes.shape({
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default News;
