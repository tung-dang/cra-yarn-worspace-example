import { render } from '@testing-library/react';
import AwesomeComponent from '../AwesomeComponent';

beforeEach(() => {
  jest.spyOn(global.console, 'log');
});

it('should render title', () => {
  const { getByText } = render(<AwesomeComponent />);
  expect(getByText('Awesome component')).toBeInTheDocument();
});
