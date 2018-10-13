import React, { Component } from 'react';

import api from '../../services/api';

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
      const response = await api.get(
        'top-headlines?country=us&apiKey=9cc106745f644f49b652cd67c424c2f0',
      );
      this.setState({ data: response.data.articles });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(d => (
            <News key={d.title} data={d} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NewsList;
