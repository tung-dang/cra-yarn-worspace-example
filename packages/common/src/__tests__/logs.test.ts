import { log } from '../logs';

beforeEach(() => {
  jest.spyOn(global.console, 'log');
});

it('should return correct value', () => {
  const result = log('test message');
  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith('[INFO][From @namespace/common]: ', 'test message');
});
