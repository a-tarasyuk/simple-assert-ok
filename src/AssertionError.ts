/**
 * AssertionError.ts
 * Author: Alexander T.
 */
export const DEFAULT_ERROR_MESSAGE = 'Assertion Failed';

export class AssertionError extends Error {
  public readonly name = 'AssertionError';
  public constructor(message: string = DEFAULT_ERROR_MESSAGE, ssf: Function | typeof AssertionError = AssertionError) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ssf);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
