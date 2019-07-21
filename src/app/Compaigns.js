import React, { Component } from 'react';
import dateFormat from 'dateformat'
import ListTable from './../components/container/listTable/ListTable'
import { DATA_HEADER, DATA_LIST, DATE_FORMAT } from './../Constants'
import { formatCash } from './../Utils'

class Components  extends Component{

  constructor () {
    super()
    this.state = {
      dataList: DATA_LIST
    }
    window.AddCampaigns = this.AddCampaigns.bind(this);
  }

  // when `window.AddCampaigns("with array")` run from the browser inspect this method will call
  AddCampaigns = (list) => {
    if (!Array.isArray(list)) {
      console.log("Not an array!")
    } else {
      this.setState(prevState => ({
        dataList: [...prevState.dataList, ...list]
      }), () => {
        this.modifyData()
      })
    }
  }

  // data will format. eg: currency format and add status
  modifyData = () => {
    let dataList = this.state.dataList
    const today = new Date();
    const todayDate = dateFormat(today, DATE_FORMAT)
    dataList.map(data => {
      const startDate = dateFormat(data.startDate, DATE_FORMAT)
      const endDate = dateFormat(data.endDate, DATE_FORMAT)
      const isActive = (startDate <= todayDate && endDate >= todayDate)
      data.budget && (data.budget = formatCash(data.budget))
      data.status = <span className={`table-status text-white ${isActive ? 'bg-success' : 'bg-danger'}`}> {isActive ? 'Active' : 'Inactive'} </span>
    })

    this.setState({
      dataList: dataList
    })
  }

  componentDidMount() {
    this.modifyData()
  }

  render() {
    return (
      <div className="container mb-5">
        <h2 className='mt-3'> Campaigns </h2>
        <ListTable dataList={this.state.dataList} cols={DATA_HEADER}/>
      </div>
    )
  }
}

export default Components
