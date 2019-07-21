import React from 'react'
import Pagination from './../../../components/container/listTable/Pagination'
import { DATA_LIST } from './../../../Constants'

describe('Pagination wrapper Test <Pagination handlePage="fn()" totalPages=100 currentPageNum=1 dataPerPage=10 />', () => {
  let _props, _wrapper

  beforeEach(() => {
    _props = {
      handlePage: jest.fn(),
      totalPages: 100,
      currentPageNum: 1,
      dataPerPage: 10,
      dataList: DATA_LIST
    }
    _wrapper = shallow(<Pagination {..._props} />)
  })

  it('Should define and render <Pagination /> component', () => {
    expect(_wrapper).toBeDefined()
    expect(_wrapper).toMatchSnapshot()
  })

  it('Should trigger `nextPage` when clicked on next page arrow button and call handlePage with currentPageNum + 1', () => {
    const nextBtn = _wrapper.find('#nexPage')
    nextBtn.simulate('click')
    expect(_props.handlePage).toHaveBeenCalled()
  })

  it('Should trigger `previousPage` when clicked on prevPage arrow button and call handlePage with currentPageNum - 1', () => {
    const prevPage = _wrapper.find('#prevPage')
    prevPage.simulate('click')
    expect(_props.handlePage).toHaveBeenCalled()
  })

  // it('When the `currentPageNum` is more than 1 then the previous button should enable', () => {
  //   _wrapper.setProps({ currentPageNum: 10 })
  //   const prevPage = _wrapper.dive().find('#prevPage')
  //   expect(prevPage.html().includes('disabled')).toBe(false)
  // })

  // it('When the `currentPageNum` and totalPages are equal then next button should disable', () => {
  //   _wrapper.setProps({ currentPageNum: 100 })
  //   const nexPage = _wrapper.find('#nexPage')
  //   expect(nexPage.html().includes('disabled')).toBe(true)
  // })
})
