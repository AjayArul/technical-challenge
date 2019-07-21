import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Compaigns from './../../app/Compaigns';
import { DATA_LIST } from './../../Constants'

describe('Compaigns test <Compaigns />', () => {
  let _props, _wrapper, _mountwrapper
  beforeEach(() => {  
    _props = {
      dataList: [],
      AddCampaigns: jest.fn()
    }
    _wrapper = shallow(<Compaigns  {..._props} />)
    _mountwrapper = mount(<Compaigns {..._props}/>)
  })
  
  it('Should Defined and render <Compaigns /> component', () => {
      expect(_wrapper).toBeDefined()
      expect(_wrapper).toMatchSnapshot()
  });

  it('call `AddCampaigns` method, when the argument is an array', () => {
    _mountwrapper.instance().AddCampaigns = jest.fn()
    _mountwrapper.instance().AddCampaigns(DATA_LIST)
    expect(_mountwrapper.instance().AddCampaigns).toHaveBeenCalled()
  })

  it('does not call `AddCampaigns` method, when the argument is not an array', () => {
    _mountwrapper.instance().AddCampaigns(null)
    expect(_props.AddCampaigns).toHaveBeenCalledTimes(0)
  })

});