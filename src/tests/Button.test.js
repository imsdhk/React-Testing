import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('has the .orange class when props.orange is true', () => {
    const wrapper = shallow(<Button orange />)
    expect(wrapper.find('.orange').length).toBe(1)
  })

  it('has the .wide class when props.wide is true', () => {
    const wrapper = shallow(<Button wide />)
    expect(wrapper.find('.wide').length).toBe(1)
  })

  it('shows props.name on the button', () => {
    const wrapper = shallow(<Button name='button' />)
    expect(wrapper.find('button').text()).toEqual('button')
  })

  it('should call props.clickHandler when the button is clicked', () => {
    const fn = jest.fn()
    const wrapper = shallow(<Button clickHandler={fn} />)
    wrapper.find('button').simulate('click')
    expect(fn.mock.calls.length).toBe(1)
  })
});
