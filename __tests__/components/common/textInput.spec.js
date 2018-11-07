import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextInput from '../../../src/components/common/textInput';

describe('The Text Input Common Component', () => {
  it('should render as expected', () => {
    const wrapper = shallow(
      <TextInput
        name="Text Input"
        label="Test Text Input"
        value="Default Value"
        onChange= {() => {console.log("Text Input value changed")}}
        error="Error" />
      );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call onChange handler', () => {
    const mockOnChange = jest.fn();
    const wrapper = shallow(
      <TextInput
        name="TextInput"
        label="Test Text Input"
        value="Default Value"
        onChange= {mockOnChange}
        error="Error" />
      );
    wrapper.find('input').simulate('change');
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });
});
