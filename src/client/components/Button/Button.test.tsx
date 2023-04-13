import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from './';

describe('Button', () => {
  it('should match snapshot', () => {
    const buttonProps = {
      text: 'Hello',
      onClick: () => {},
    };
    const component = renderer.create(<Button {...buttonProps} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
