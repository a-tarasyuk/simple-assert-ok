/**
 * SimpleAssertOK.ts
 * Author: Alexander T.
 */
import { AssertionError } from './AssertionError';

const assert = (expression: any, message?: string | undefined): void => {
  if (!expression) {
    throw new AssertionError(message, assert);
  }
};

export default assert;
