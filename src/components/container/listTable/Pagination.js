import React, { Component } from 'react'
import { func, number, string, array } from 'prop-types'

class Pagination extends Component {

  nextPage = () => {
    let currentPage = this.props.currentPageNum + 1;
    this.props.handlePage(currentPage)
  }

  previousPage = () => { 
    let currentPage = this.props.currentPageNum - 1;
    this.props.handlePage(currentPage)
  };

  render () {
    let { dataList, currentPageNum, dataPerPage, numberOfRecords } = this.props;
    
    // Logic for displaying page numbers
    let totalPages = [];
    dataList && (totalPages = Math.ceil(dataList.length / dataPerPage))

    if (!(dataList.length <= dataPerPage) && !(currentPageNum === 0 || currentPageNum > totalPages)) {
      return (
        <div className="pagination">
          <div className="control left">
            <button id="prevPage" type="button" aria-label="previous page" title="Previous Page" disabled={currentPageNum <= 1 ? true : false} onClick={this.previousPage.bind(this)}>
              <i className="fas fa-chevron-circle-left"></i>
            </button>
          </div>
          <div className="pag-label">
            <span className="first"> {currentPageNum}</span> of <span className="total">{totalPages}</span>
          </div>
          <div className="control right">
            <button id="nexPage" type="button" aria-label="next page" title="Next Page" disabled={currentPageNum == totalPages ? true : false} onClick={this.nextPage.bind(this)}>
              <i className="fas fa-chevron-circle-right"></i>
            </button>
          </div>
        </div >
      );
    } else {
      return null
    }

  }
}

Pagination.propTypes = {
  currentPageNum: number,
  dataPerPage: number,
  dataList: array,
  handlePage: func
};

export default Pagination;
