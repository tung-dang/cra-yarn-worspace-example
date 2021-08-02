import { guessDateFromText } from '../date';

const mockDate = new Date(2018, 8 - 1, 10);

it('should return correct value', () => {
  let result = guessDateFromText('Aug 09, 2018', {
    refDate: mockDate,
  });

  expect(result.toISOString()).toEqual('2018-08-09T12:00:00.000Z');

  result = guessDateFromText('Aug 09, 2018 21:18');
  expect(result.toUTCString()).toEqual('Thu, 09 Aug 2018 21:18:00 GMT');

  result = guessDateFromText('Aug 09, 2018 21:18:50');
  expect(result.toUTCString()).toEqual('Thu, 09 Aug 2018 21:18:50 GMT');

  result = guessDateFromText('2011-11-18');
  expect(result.toUTCString()).toEqual('Fri, 18 Nov 2011 00:00:00 GMT');
});
