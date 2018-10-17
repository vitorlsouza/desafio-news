import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import Loading from '../Loading';
import News from '../News';

import { LoadingIcon } from './styles';

class NewsList extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    news: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  state = {
    country: '',
  };

  componentDidMount() {
    this.loadNewsList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.loadNewsList();
    }
  }

  loadNewsList = async () => {
    const { getAllNewsRequest, getCountryNewsRequest, country } = this.props;
    if (country === undefined) {
      try {
        getAllNewsRequest();
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
          <ul>
            {news.map(d => (
              <News key={d.title} data={d} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.news.loading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
