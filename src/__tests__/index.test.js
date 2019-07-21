import Index from './../index';
import ReactDOM from 'react-dom';
import Header from './../components/presentational/header/Header'
import {MemoryRouter} from 'react-router-dom'

describe("test ReactDOM.render", () => {
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });

  it("should call ReactDOM.render", () => {
    ReactDOM.render()
    expect(ReactDOM.render).toBeCalled()
  });

  it('should show Home component for / router (using memory router)', () => {
    const component = shallow( <MemoryRouter initialEntries = {['/']} >
        <Header />
      </MemoryRouter>
    );
    expect(component.find(Header)).toHaveLength(1);
  })

});