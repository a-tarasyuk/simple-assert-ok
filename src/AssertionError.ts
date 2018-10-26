/**
 * AssertionError.ts
 * Author: Alexander T.
 */

const DEFAULT_ERROR_MESSAGE = 'Assertion Failed';
const NAME = 'AssertionError';

interface AssertionErrorProps {
  message: string;
  actual: boolean;
  expected: boolean;
  operator: string;
  ssf: Function;
}

export class AssertionError extends Error {
  public readonly name: string;
  public readonly generatedMessage: boolean;

  public readonly operator?: string;
  public readonly expected?: boolean;
  public readonly actual?: boolean;

  /**
   * @param {AssertionErrorProps} props
   */
  public constructor({ message, actual, expected, operator, ssf }: Partial<AssertionErrorProps> = {}) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = NAME;
    this.generatedMessage = !message;
    this.message = message || DEFAULT_ERROR_MESSAGE;
    this.setAdditionalProps({ actual, expected, operator });

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ssf || AssertionError);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }

  private setAdditionalProps(props: Partial<AssertionErrorProps>) {
    Object.keys(props).forEach(key => this[key] = props[key]);
  }
}
