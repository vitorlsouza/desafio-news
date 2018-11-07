import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import Loading from '../Loading';

import { Container, LoadingIcon } from './styles';
import Pagination from '../Pagination';
import NotFound from '../NotFound';

class NewsList extends Component {
  static propTypes = {
    getAllNewsRequest: PropTypes.func.isRequired,
    getCountryNewsRequest: PropTypes.func.isRequired,
    searchNewsRequest: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    news: PropTypes.shape().isRequired,
    page: PropTypes.string.isRequired,
    country: PropTypes.string,
    query: PropTypes.string.isRequired,
    search: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    country: undefined,
  };

  componentDidMount() {
    this.loadNewsList();
  }

  componentDidUpdate(prevProps) {
    const { country, page, changePage } = this.props;

    if (prevProps.country !== country) {
      changePage('1');
      this.loadNewsList(prevProps.country);
    }

    if (prevProps.page !== page) {
      this.loadNewsList();
    }
  }

  loadNewsList = (props) => {
    const {
      getAllNewsRequest,
      getCountryNewsRequest,
      searchNewsRequest,
      query,
      country,
      page,
      search,
    } = this.props;

    if (country === undefined) {
      try {
        if (props !== undefined) {
          getAllNewsRequest('1');
        } else if (search) {
          searchNewsRequest(query, page);
        } else {
          getAllNewsRequest(page);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (country) {
      try {
        getCountryNewsRequest(country, page);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { loading, news, error } = this.props;
    return (
      <Container>
        {loading ? (
          <LoadingIcon>
            <Loading />
          </LoadingIcon>
        ) : error || !news.totalResults ? (
          <NotFound />
        ) : (
          <Pagination data={news} />
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.news.loading,
  page: state.news.page,
  search: state.news.search,
  query: state.news.query,
  error: state.news.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
