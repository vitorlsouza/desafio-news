import React, { Component, Fragment } from 'react';

import News from '../News';

import { Buttons, Button } from './styles';

class Pagination extends Component {
  state = {
    itemsPerPage: 2,
    currentPage: 1,
    visiblePages: 3,
    totalPages: 0,
    items: [],
    pages: [],
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    this.countPages();
    this.itemsOnThisPage();
  };

  countPages = () => {
    const { itemsPerPage } = this.state;
    const { data } = this.props;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    this.setState({ totalPages }, () => {
      this.pagination();
    });
  };

  itemsOnThisPage = () => {
    const { data } = this.props;
    const { itemsPerPage, currentPage } = this.state;

    const items = data.slice(
      itemsPerPage * (currentPage - 1),
      itemsPerPage * (currentPage - 1) + itemsPerPage,
    );

    this.setState({ items });
  };

  pagination = () => {
    const { totalPages, currentPage, visiblePages } = this.state;

    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }

    let page = [];

    if (currentPage == 1) {
      console.log('page 1');
      page = numbers.slice(currentPage, currentPage + visiblePages);
    }

    if (currentPage == 2) {
      console.log('page 2');
      page = numbers.slice(currentPage - 1, currentPage + visiblePages);
    }

    if (currentPage >= 3 && currentPage < totalPages - 1) {
      console.log('page maior que o terceiro e menor que o antepenultimo');
      page = numbers.slice(currentPage - 2, currentPage + visiblePages);
    }

    if (currentPage == totalPages - 1) {
      console.log('penultimo');
      page = numbers.slice(currentPage - 3, currentPage + visiblePages);
    }

    if (currentPage == totalPages) {
      console.log('ultimo');
      page = numbers.slice(currentPage - 4, currentPage + visiblePages);
    }

    const pages = [1, page[0], page[1], page[2], totalPages];
    this.setState({ pages });
  };

  onChangePage = (e) => {
    this.setState({ currentPage: e.target.value }, () => {
      this.loadItems();
    });
    this.activePage(e);
  };

  activePage = (e) => {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p) => {
      if (p.textContent === e.target.value) {
        console.log(p);
        p.setAttribute('id', 'active');
      } else {
        console.log(p);
        p.setAttribute('id', 'normal');
      }
    });
  };

  render() {
    const { items, pages } = this.state;
    return (
      <Fragment>
        <div id="newList">
          <ul>
            {items.map(d => (
              <News key={d.title} data={d} />
            ))}
          </ul>
        </div>
        <Buttons>
          {pages.map((p, index) => (
            <Button
              key={index}
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

export default Pagination;
