import React from 'react'
import Footer from './../../../components/presentational/footer/Footer';

describe('Footer test <Footer />', () => {
  let _wrapper
  beforeEach(() => {
    _wrapper = shallow(<Footer />)
  })
  it('Should Defined and render <Footer /> component', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper).toMatchSnapshot()
  });
});
