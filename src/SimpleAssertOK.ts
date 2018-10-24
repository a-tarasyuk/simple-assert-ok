/**
 * SimpleAssertOK.ts
 * Author: Alexander T.
 */
import { AssertionError } from './AssertionError';

const DEFAULT_ERROR_MESSAGE = 'Assertion Failed';
const assert = (expression: any, message?: string | undefined): void => {
  if (!expression) {
    throw new AssertionError(message || DEFAULT_ERROR_MESSAGE, assert);
  }
};

export default assert;
