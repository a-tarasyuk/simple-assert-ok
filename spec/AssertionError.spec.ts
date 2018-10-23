import { AssertionError, DEFAULT_ERROR_MESSAGE } from '../src/AssertionError';

describe('AssertionError', () => {
  it('checks AssertionError construction', () => {
    const error = new AssertionError();
    expect(error instanceof Error).toBeTruthy();
    expect(error instanceof AssertionError).toBeTruthy();
  });

  it('checks AssertionError name', () => {
    const error = new AssertionError();
    expect(error.name).toEqual('AssertionError');
  });

  it('checks AssertionError message', () => {
    const error = new AssertionError('Error Message!');
    expect(error.message).toEqual('Error Message!');
  });

  it('checks default error message', () => {
    const error = new AssertionError();
    expect(error.message).toEqual(DEFAULT_ERROR_MESSAGE);
  });

  it('checks AssertionError stack', () => {
    const error = new AssertionError();
    expect(typeof error.stack).toEqual('string');
  });
});
