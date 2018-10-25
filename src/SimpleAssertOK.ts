/**
 * SimpleAssertOK.ts
 * Author: Alexander T.
 */
import { AssertionError } from './AssertionError';

export const assert = (expression: any, message?: string): void => {
  if (!expression) {
    throw new AssertionError(message, !expression, true, '==', assert);
  }
};

export default assert;
