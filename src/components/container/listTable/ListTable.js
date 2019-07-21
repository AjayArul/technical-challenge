import React, { Component } from 'react'
import dateFormat from 'dateformat'
import { DATE_FORMAT } from './../../../Constants'
import SearchFilter from './../../presentational/searchFilter/SearchFilter'
import Pagination from './Pagination'
import {array} from 'prop-types'
import './listTable.scss'


class ListTable extends Component {
  
    constructor () {
        super()
        this.state = {
            startDate: null,
            endDate: null,
            searchKey: null,
            searchDataList: [],
            errorFilter: false,
            dataPerPage: 10,
            pageNumber: 1
        }
    }

    // pagination current pagenumber changes
    onChangePage = newPage => {
        this.setState({ pageNumber: newPage })
    }

    // on change of filter fields this method will update the state
    onSearch = key => e => {
        this.setState({
            [key]: e.target.value
        }, () => {
            this.doSearch()
        })
    }

    doSearch = () => {
        this.setState({errorFilter:false});
        let searchList = this.props.dataList.filter(data => {
            const startDate = this.state.startDate
            const endDate = this.state.endDate
            const startListDate = dateFormat(data.startDate, DATE_FORMAT)
            const startSelectedDate = dateFormat(startDate, DATE_FORMAT)
            const endListDate = dateFormat(data.endDate, DATE_FORMAT)
            const endSelectedDate = dateFormat(endDate, DATE_FORMAT)
            let  valid = true

            if (startDate && startListDate <= startSelectedDate) {
                valid = false
            }
            if (endDate && endListDate >= endSelectedDate){
                valid =false
            }
            if (this.state.searchKey) {
                let match = null
                try {
                    const searchKeyword = this.state.searchKey.toLowerCase()
                    match = data.name.toLowerCase().includes(searchKeyword)
                } catch (err) {
                    match = null
                }
                !match && (valid = false)
            } 
            if (valid) {
                return data;
            } else {
                return null
            }
        });
        searchList.length === 0 && this.setState({errorFilter:true})
        this.setState({
            searchDataList: searchList
        })   
    }

    // reset the filter
    resetSearch = () => {
        this.setState({
            startDate: null,
            endDate: null,
            searchKey: null,
            errorFilter: null,
            searchDataList: []

        })
    }

    // validate the default-data and search-data
    searchListValitation() {
        const searchDataList = this.state.searchDataList
        let dataList = searchDataList
        if (searchDataList != null && searchDataList.length === 0 && !this.state.errorFilter) {
            dataList = this.props.dataList
        } 
        return dataList
    }

    // render table header 
    renderTableHeader() { 
        return ( 
            <thead className='bg-secondary text-white'>
                <tr> 
                    {
                        this.props.cols.map((colData, index) => {
                            return <th key={index}>{colData.label}</th>
                        })
                    }
                </tr>
            </thead>
        )
    }

    // render table rows
    renderDataList() { 
        let dataList = this.searchListValitation()
        let {pageNumber, dataPerPage} = this.state

        // pagination Logic for displaying current data
        const endPage = pageNumber * dataPerPage
        const startPage = endPage - dataPerPage
        const paginationData = dataList.slice(startPage, endPage)
        pageNumber <= 0 ? (dataList = []) : (dataList = paginationData)

        return ( 
            <tbody>
                {
                    dataList && dataList.map((dataItem, index) => {
                        return (
                            <tr key={index}>
                                {
                                    this.props.cols.map((colData, index) => { 
                                        return (
                                            <td key={'td' + index}>
                                                {dataItem[colData.key]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }

    render() {
        const dataList = this.searchListValitation()
        let {startDate, endDate, searchKey, errorFilter, pageNumber, dataPerPage} = this.state

        return (
            <div className='tableWrapper'>
                <SearchFilter 
                    searchLabels={[startDate, endDate, searchKey]}
                    handleSerach={this.onSearch} 
                    resetSearch={this.resetSearch} 
                />
                {
                    (errorFilter && (startDate !== '' || endDate !== '' || searchKey.toLowerCase() !== '')) && 
                        <p className='text-danger'>0  matching Campaigns. try another term.</p>
                }    
                <div className='table-responsive'> 
                    <table className="table table-striped table-hover">
                        {this.renderTableHeader()}
                        {   
                            dataList != null && dataList.length !== 0 && this.renderDataList()
                        }
                    </table>
                </div>
                <Pagination
                    handlePage={this.onChangePage}
                    currentPageNum={pageNumber}
                    dataPerPage={dataPerPage}
                    dataList={dataList}
                />
            </div>
        )
    }
}

ListTable.propTypes = {
    cols: array.isRequired,
    dataList: array.isRequired
}

export default ListTable