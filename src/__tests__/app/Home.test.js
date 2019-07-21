import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Home from './../../app/Home';

describe('Home test <Home />', () => {
  let _wrapper
  beforeEach(() => {
    _wrapper = shallow(<Home />)
  })
  it('Should Defined and render <Home /> component', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper).toMatchSnapshot()
  });
});
