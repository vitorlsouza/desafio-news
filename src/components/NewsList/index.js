import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as NewsActions from '../../store/actions/news';

import Loading from '../Loading';
import News from '../News';

import { LoadingIcon } from './styles';

class NewsList extends Component {
  componentDidMount() {
    this.loadNewsList();
  }

  loadNewsList = async () => {
    const { getAllNewsRequest } = this.props;
    try {
      getAllNewsRequest();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { loading, news } = this.props;
    console.log(loading);
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
