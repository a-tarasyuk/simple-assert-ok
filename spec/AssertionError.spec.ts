import { AssertionError } from '../src/AssertionError';

const ssf = () => {};
const props = { message: '', expected: true, actual: true, operator: '==', ssf };

describe('AssertionError', () => {
  it('checks AssertionError construction', () => {
    const error = new AssertionError(props);
    expect(error instanceof Error).toBeTruthy();
    expect(error instanceof AssertionError).toBeTruthy();
  });

  it('checks AssertionError attributes', () => {
    const error = new AssertionError(props);

    expect(error.name).toEqual('AssertionError');
    expect(typeof error.stack).toEqual('string');
    expect(error.operator).toEqual('==');
    expect(error.expected).toBeTruthy();
    expect(error.actual).toBeTruthy();
  });

  it('checks AssertionError default message', () => {
    const error = new AssertionError(props);

    expect(error.message).toEqual('Assertion Failed');
    expect(error.generatedMessage).toBeTruthy();
  });

  it('checks AssertionError custom message', () => {
    const error = new AssertionError({ ...props, message: 'Error Message!' });
    expect(error.message).toEqual('Error Message!');
    expect(error.generatedMessage).toBeFalsy();
  });
});
