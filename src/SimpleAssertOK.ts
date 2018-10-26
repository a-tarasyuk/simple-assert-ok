/**
 * SimpleAssertOK.ts
 * Author: Alexander T.
 */
import { AssertionError } from './AssertionError';

export const assert = (expression: any, message?: string): void => {
  if (!expression) {
    throw new AssertionError({
      message, actual: !expression, expected: true, operator: '==', ssf: assert,
    });
  }
};

export default assert;
