import { AssertionError } from '../src/AssertionError';

const message = '';
const actual = true;
const expected = true;
const operator = '==';
const ssf = () => {};

describe('AssertionError', () => {
  it('checks AssertionError construction', () => {
    const error = new AssertionError(message, actual, expected, operator, ssf);

    expect(error instanceof Error).toBeTruthy();
    expect(error instanceof AssertionError).toBeTruthy();

    expect(error.message).toEqual('Assertion Failed');
    expect(error.generatedMessage).toBeTruthy();

    expect(error.name).toEqual('AssertionError');
    expect(typeof error.stack).toEqual('string');

    expect(error.operator).toEqual('==');
    expect(error.expected).toBeTruthy();
    expect(error.actual).toBeTruthy();
  });

  it('checks AssertionError custom message', () => {
    const error = new AssertionError('Error Message!', actual, expected, operator, ssf);

    expect(error.message).toEqual('Error Message!');
    expect(error.generatedMessage).toBeFalsy();
  });
});
