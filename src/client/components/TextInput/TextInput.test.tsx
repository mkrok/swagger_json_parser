import * as React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
  it('should match snapshot when all props are defined', () => {
    const value = '';
    const props = {
      disabled: false,
      label: 'Enter your name: ',
      value,
      onChange: () => {},
    };
    const component = renderer.create(<TextInput {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it('should match snapshot when only necessary props are defined', () => {
    const value = '';
    const props = {
      value,
    };
    const component = renderer.create(<TextInput {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
