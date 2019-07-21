import React, {Component} from 'react'
import Header from './../../../components/presentational/header/Header';

describe('Header test <Header />', () => {
  let _wrapper
  beforeEach(() => {
    _wrapper = shallow(<Header />)
  })
  it('Should Defined and render <Header /> component', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper).toMatchSnapshot()
  });
});
