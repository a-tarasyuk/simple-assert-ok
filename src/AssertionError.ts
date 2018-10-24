/**
 * AssertionError.ts
 * Author: Alexander T.
 */

 export class AssertionError extends Error {
  public readonly name = 'AssertionError';

  public constructor(message?: string | undefined, ssf?: Function | undefined) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ssf || AssertionError);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
