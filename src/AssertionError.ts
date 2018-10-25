/**
 * AssertionError.ts
 * Author: Alexander T.
 */

const DEFAULT_ERROR_MESSAGE = 'Assertion Failed';

export interface AssertionErrorProps {
  expected: boolean;
  actual: boolean;
  operator: string;
  message?: string;
  ssf: Function;
}

export class AssertionError extends Error {
  public readonly name = 'AssertionError';
  public readonly generatedMessage: boolean;
  public readonly operator: string;
  public readonly expected: boolean;
  public readonly actual: boolean;

  public constructor(props: AssertionErrorProps) {
    super(props.message);
    Object.setPrototypeOf(this, new.target.prototype);

    const { expected, operator, message, actual, ssf } = props;

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
