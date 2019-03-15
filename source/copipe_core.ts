/**
 * copipe.js
 * version 0.1.8
 *  copipe_core.js
 */

namespace copipe {
  export const VERSION = '0.1.8';
}

namespace copipe.type {
  export function _isNull(value: any) {
    return (value === null);
  }

  export function _isUndefined(value: any): boolean {
    return (typeof value === 'undefined');
  }

  export function _isBoolean(value: any) {
    return (typeof value === 'boolean');
  }
}
namespace copipe.syntax {
  const { _isUndefined, _isNull, _isBoolean } = copipe.type;

  export function assert(value: boolean, message: string | null | undefined) {
    if (_isUndefined(message) || _isNull(message)) {
      message = '';
    }
    if (!_isBoolean(value)) {
      throw new Error('assert:' + message);
    }
    if (!value) {
      throw new Error('assert:' + message);
    }
  };
}



export = copipe;
