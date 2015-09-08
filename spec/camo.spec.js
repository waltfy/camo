/* global describe,it */
'use strict';

import assert from 'assert';
import * as Camo from '../src/camo';

describe('Camo', () => {
    describe('#mask()', () => {
        const MASK = '(99)-99';
        it(`should mask ${ MASK }`, () => {
            var result = Camo.mask({ re: MASK, input: '(' });
            assert.equal(false, true); // TODO: actually write tests
        });
    });
});
