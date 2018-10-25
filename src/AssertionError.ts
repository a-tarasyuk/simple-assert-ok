/**
 * AssertionError.ts
 * Author: Alexander T.
 */

const DEFAULT_ERROR_MESSAGE = 'Assertion Failed';

export class AssertionError extends Error {
  public readonly name = 'AssertionError';
  public readonly generatedMessage: boolean;
  public readonly operator: string;
  public readonly expected: boolean;
  public readonly actual: boolean;

  /**
   * @param {string | undefined} message
   * @param {boolean} actual
   * @param {boolean} expected
   * @param {string} operator
   * @param {Function} ssf
   */
  public constructor(message: string | undefined, actual: boolean, expected: boolean, operator: string, ssf: Function) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.generatedMessage = !message;
    this.operator = operator;
    this.expected = expected;
    this.actual = actual;
    this.message = message || DEFAULT_ERROR_MESSAGE;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ssf || AssertionError);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}
