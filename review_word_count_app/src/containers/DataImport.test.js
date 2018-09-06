import DataImport from '../DataImport';
const assert = require('assert');

it('can import data array from outside of app', () => {
  const result = DataImport.length;
  assert.deepStrictEqual(result, 20);
});

it('is getting correct data from import', () => {
  const result = DataImport[0];
  assert.deepStrictEqual(result, "A great product for daily use,");
})
