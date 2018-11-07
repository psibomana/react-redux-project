import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectInput from '../../../src/components/common/selectInput';

describe('The Select Input Common Component', () => {
  it('should render as expected', () => {
    const options = [
      {id: 1, firstName: "Option First Name 1", lastName: "Option Last Name 1"},
      {id: 2, firstName: "Option First Name 2", lastName: "Option Last Name 2"},
      {id: 3, firstName: "Option First Name 3", lastName: "Option Last Name 3"}
    ]
    const wrapper = shallow(
      <SelectInput
        id="Item ID"
        name="Item Name"
        label="Item Label"
        value="Item Value"
        defaultOption="Select Default Option"
        options={options}
        onChange={() => {console.log("Select Input value changed")}}
        error="Error"/>);

    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
