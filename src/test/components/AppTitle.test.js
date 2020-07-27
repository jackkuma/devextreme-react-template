import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import AppTitle from '../../components/header/AppTitle';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
    const wrapper = shallow(<AppTitle {...props} />)
    if (state) wrapper.setState(state);
    return wrapper;
  }
  
  /**
   * Return ShallowWrapper containing node(s) with the given data-test value.
   * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
   * @param {string} val - Value of data-test attribute for search.
   * @returns {ShallowWrapper}
   */
  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

test('renders change button', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'change-state');
    expect(appComponent.length).toBe(1);
});

// test('renders change button', () => {
//     const wrapper = setup();
//     const button = findByTestAttr(wrapper, 'change-button');
//     expect(button.length).toBe(1);
// });

test('isShow state', () => {
  const wrapper = shallow(<AppTitle className='show' className='hide' />);
  expect(wrapper.find('.show').toBeTruthy();
  wrapper.simulate('click');
  expect(wrapper.find('.hide').toBeTruthy();
});