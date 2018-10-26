import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import Loading from '../Loading';

import { LoadingIcon } from './styles';
import Pagination from '../Pagination';

class NewsList extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    news: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    page: PropTypes.string.isRequired,
    country: PropTypes.string,
  };

  static defaultProps = {
    country: undefined,
  };

  componentDidMount() {
    this.loadNewsList();
  }

  componentDidUpdate(prevProps) {
    const { country, page } = this.props;

    if (prevProps.country !== country) {
      this.loadNewsList();
    }

    if (prevProps.page !== page) {
      this.loadNewsList();
    }
  }

  loadNewsList = async () => {
    const {
      getAllNewsRequest, getCountryNewsRequest, country, page,
    } = this.props;

    if (country === undefined) {
      try {
        getAllNewsRequest(page);
      } catch (error) {
        console.log(error);
      }
    }

    if (country) {
      try {
        getCountryNewsRequest(country);
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { loading, news } = this.props;
    return (
      <div>
        {loading ? (
          <LoadingIcon>
            <Loading />
          </LoadingIcon>
        ) : (
          <Pagination data={news} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.news.loading,
  page: state.news.page,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
