import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  Link,
  Container,
  ImageMobile,
  ImageDesktop,
  ContentMobile,
  ContentDesktop,
} from './styles';

const News = ({ data }) => (
  <Link href={data.url}>
    <Container>
      <ImageMobile>
        {data.urlToImage !== null ? <img src={data.urlToImage} alt="news" /> : null}
      </ImageMobile>
      <ContentMobile>
        <span>{moment(data.publishedAt.substr(0, 10)).format('DD/MM/YYYY')}</span>
        <strong>{data.title}</strong>
        <p>{data.description}</p>
        {data.author ? (
          <strong>
POR :
            {data.author}
          </strong>
        ) : null}
      </ContentMobile>
      <ImageDesktop>
        {data.urlToImage !== null ? <img src={data.urlToImage} alt="news" /> : null}
      </ImageDesktop>
      <ContentDesktop>
        <span>{moment(data.publishedAt.substr(0, 10)).format('DD/MM/YYYY')}</span>
        <strong>{`${data.title.substr(0, 50)}...`}</strong>
        <p>{`${data.description.substr(0, 100)}...`}</p>
        {data.author ? (
          <strong>
strongOR :
            {data.author}
          </strong>
        ) : null}
      </ContentDesktop>
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
