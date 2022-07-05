import { cartesianProduct, cartesian } from './cartesian.product.mjs'

describe('cartesian', () => {
  it('should generate all possible variants', () => {
    const colors = ['blue', 'red'];
    const sizes = ['s', 'm'];
    const result = cartesian(colors, sizes);
    const expected = [ [ 'blue', 's' ], [ 'blue', 'm' ], [ 'red', 's' ], [ 'red', 'm' ] ];
    expect(result).toEqual(expected);
  });
});