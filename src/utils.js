'use strict';

import { DICTIONARY } from './dictionary';


let escapeRegExp = string => string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');

let replaceAll = (string, find, replace) => string.replace(new RegExp(escapeRegExp(find), 'g'), replace);

/** FIXME: explain this function
 * takes a regular expression and...
 *
 * description
 */
let tokeniseRegExp = opts => {
    console.log('tokeniseRegExp() =====', opts);
    let re = opts.re;
    console.log('re: ', re); // TODO: Remove this comment.

    Object.keys(DICTIONARY)
        .forEach(function (entry) {
            re = replaceAll(re, DICTIONARY[entry].value, entry);
        });

    return re.split('');
};

export { escapeRegExp, replaceAll, tokeniseRegExp };
