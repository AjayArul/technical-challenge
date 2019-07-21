import React from 'react'
import dateFormat from 'dateformat'
import ListTable from './../../../components/container/listTable/ListTable';
import { DATA_LIST } from './../../../Constants'
import { DATE_FORMAT } from './../../../Constants'

describe('ListTable test <ListTable />', () => {
  let _props, _wrapper, _mountwrapper
  beforeEach(() => {  
    _props = {
        startDate: '9/19/2017',
        endDate: '9/19/2019',
        searchKey: 'd',
        searchDataList: [],
        cols: [],
        dataList: DATA_LIST,
        onSearch: jest.fn()
    }
    _wrapper = shallow(<ListTable  {..._props} />)
    _mountwrapper = mount(<ListTable {..._props}/>)
  })
  
  it('Should Defined and render <ListTable /> component', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper).toMatchSnapshot()
  });

  it('Should trigger `resetSearch` to clear fiters when reset-icon button clicked', () => {
    const resetBtn = _mountwrapper.find('#reset')
    resetBtn.simulate('click')
    _wrapper.setProps({ 
        startDate: null,
        endDate: null,
        searchKey: null,
        searchDataList: [],
    })
    _props.onSearch()
    expect(_props.onSearch).toHaveBeenCalled()
    expect(_mountwrapper.state().searchKey).toEqual(null)
  })

  it('Should trigger `onSearch`', () => {
    const searchBtn = _mountwrapper.find('#search')
    searchBtn.simulate('change')
    _props.onSearch()
    expect(_props.onSearch).toBeCalled()
    _props.dataList.filter(data => {})
  })

});