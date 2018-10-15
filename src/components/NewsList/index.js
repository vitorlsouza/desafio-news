import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as NewsActions from '../../store/actions/news';

import News from '../News';

class NewsList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.loadNewsList();
  }

  loadNewsList = async () => {
    try {
      this.props.getAllNewsRequest();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.news.map(d => (
            <News key={d.title} data={d} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

const mapStateToProps = state => ({
  news: state.news.news,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
