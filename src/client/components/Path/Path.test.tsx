import renderer from 'react-test-renderer';
import Path from './';

describe('Path', () => {
  it('should match snapshot', () => {
    const props = {
      method: 'get',
      info: {},
    };
    const component = renderer.create(<Path {...props} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
