import React from 'react'
import {func, array} from 'prop-types';

const SearchFilter = (props) => {
    return (
        <div className="row search">
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6 input-group mb-3 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="start-date">Start Date</span>
                        </div>
                        <input 
                            id="startDate"
                            type="date" 
                            className="form-control" 
                            value={props.searchLabels[0] || ''}
                            placeholder="Start Date"
                            aria-label="Start Date"
                            aria-describedby="start-date"
                            max={props.searchLabels[0]}
                            onChange={props.handleSerach('startDate')}
                        />
                    </div>
                    <div className="col-md-6 input-group mb-3 mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="end-date">End Date</span>
                        </div>
                        <input 
                            id="endDate"
                            type="date" 
                            className="form-control"
                            value={props.searchLabels[1] || ''} 
                            placeholder="End Date"
                            aria-label="End Date" 
                            aria-describedby="end-date"
                            min={props.startDate}
                            onChange={props.handleSerach('endDate')}
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="input-group mb-3 mt-3">
                    <input 
                        type="search" 
                        id="search"
                        className="form-control"
                        value={props.searchLabels[2] || ''}
                        maxLength="50"
                        placeholder="Search by name" 
                        aria-label="search by name" 
                        aria-describedby="search"
                        onChange={props.handleSerach('searchKey')}
                    />
                    <div className="input-group-append">
                        <button type="reset" title="reset filter" className="input-group-text" id="reset" onClick={props.resetSearch}>
                            <i className="fas fa-redo-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

SearchFilter.propType = {
    searchLabels: array.isRequired,
    handleSerach: func
}

export default SearchFilter