import renderer from 'react-test-renderer';
import Data from './';

describe('Data', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Data />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
