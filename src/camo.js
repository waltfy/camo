'use strict';

import { DICTIONARY } from './dictionary';
import * as UTILS from './utils';

var mask = opts => {
  console.log(`mask() =====`);

  let tokens = UTILS.tokeniseRegExp(opts);
  let res = '';

  for (let char in opts.input) {

    let cursor = (res.length === 0) ? 0 : res.length - 1;
    console.log(`cursor: ${ cursor }, char: ${ char }`);

    let currentCharacter = opts.input[char];
    let currentToken = tokens[char];
    let nextToken = tokens[parseInt(char, 10) + 1];
    let isCurrentTokenMask = !DICTIONARY.hasOwnProperty(currentToken);
    let isNextTokenMask = !DICTIONARY.hasOwnProperty(nextToken);

    if (isCurrentTokenMask) {
      res += currentToken;
    }

    if (!isNextTokenMask) {
      res += DICTIONARY[nextToken].re.test(currentCharacter) ? currentCharacter : '';
    }

    console.log(`isCurrentTokenMask: ${ isCurrentTokenMask }`);
    console.log(`isNextTokenMask: ${ isNextTokenMask }`);
    console.log(`currentCharacter: ${ currentCharacter }, currentToken: ${ currentToken }, nextToken: ${ nextToken }`);
    console.log(`res: ${ res }`);
  }

  return res;
}

export { mask };
