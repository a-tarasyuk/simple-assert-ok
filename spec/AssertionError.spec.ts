import { AssertionError } from '../src/AssertionError';


describe('AssertionError', () => {
  it('checks AssertionError construction', () => {
    const error = new AssertionError();

    expect(error instanceof Error).toBeTruthy();
    expect(error instanceof AssertionError).toBeTruthy();
  });

  it('checks AssertionError defaults', () => {
    const error = new AssertionError();

    expect(error.message).toEqual('Assertion Failed');
    expect(error.generatedMessage).toBeTruthy();

    expect(error.name).toEqual('AssertionError');
    expect(typeof error.stack).toEqual('string');

    expect(error.actual).toBeUndefined();
    expect(error.expected).toBeUndefined();
    expect(error.operator).toBeUndefined();
  });

  it('checks AssertionError custom message', () => {
    const error = new AssertionError({ message: 'Error Message!' });

    expect(error.message).toEqual('Error Message!');
    expect(error.generatedMessage).toBeFalsy();
  });

  it('checks AssertionError additional information', () => {
    const error = new AssertionError({ actual: false, expected: true, operator: '==' });

    expect(error.actual).toBeFalsy();
    expect(error.expected).toBeTruthy();
    expect(error.operator).toEqual('==');
  });
});
