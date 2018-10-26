import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NewsActions from '../../store/actions/news';

import News from '../News';

import { Buttons, Button } from './styles';

class Pagination extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    currentPage: PropTypes.string.isRequired,
    changePage: PropTypes.func.isRequired,
  };

  state = {
    itemsPerPage: 7,
    visiblePages: 3,
    totalPages: 0,
    pages: [],
  };

  componentDidMount() {
    this.countPages();
  }

  countPages = () => {
    const { itemsPerPage } = this.state;
    const { data } = this.props;

    const totalPages = Math.ceil(data.totalResults / itemsPerPage);

    this.setState({ totalPages }, () => {
      this.pagination();
    });
  };

  pagination = () => {
    const { totalPages, visiblePages } = this.state;
    const { currentPage } = this.props;

    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    let page = [];

    if (+currentPage === 1) {
      page = numbers.slice(currentPage, currentPage + visiblePages);
    }

    if (+currentPage === 2) {
      page = numbers.slice(currentPage - 1, currentPage + visiblePages);
    }

    if (+currentPage >= 3 && currentPage < totalPages - 1) {
      page = numbers.slice(currentPage - 2, currentPage + visiblePages);
    }

    if (+currentPage === totalPages - 1) {
      page = numbers.slice(currentPage - 3, currentPage + visiblePages);
    }

    if (+currentPage === totalPages) {
      page = numbers.slice(currentPage - 4, currentPage + visiblePages);
    }

    const pages = [1, page[0], page[1], page[2], totalPages];
    this.setState({ pages });
    this.activePage(currentPage);
  };

  onChangePage = (e) => {
    const { changePage } = this.props;
    changePage(e.target.value);
  };

  activePage = (page) => {
    setTimeout(() => {
      const pages = document.querySelectorAll('.page');
      pages.forEach((p) => {
        if (p.textContent === page) {
          p.setAttribute('id', 'active');
        } else {
          p.setAttribute('id', 'normal');
        }
      });
    }, 10);
  };

  render() {
    const { pages } = this.state;
    const { data } = this.props;
    return (
      <Fragment>
        <div id="newList">
          <ul>
            {data.articles.map(d => (
              <News key={d.title} data={d} />
            ))}
          </ul>
        </div>
        <Buttons>
          {pages.map(p => (
            <Button
              key={p}
              className="page"
              value={p}
              type="button"
              onClick={e => this.onChangePage(e)}
            >
              {p}
            </Button>
          ))}
        </Buttons>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.news.page,
});

const mapDispatchToProps = dispatch => bindActionCreators(NewsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
