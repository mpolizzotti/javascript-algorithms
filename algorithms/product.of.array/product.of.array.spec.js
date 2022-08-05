import productOfArrayExceptSelf from './product.of.array.mjs';

describe('productOfArrayExceptSelf', () => {
  it('should return an array such that answer[i] is equal to the product of all the elements of nums except nums[i]', () => {
    const numbers = [1,2,3,4];
    expect(productOfArrayExceptSelf(numbers)).toEqual([24,12,8,6]);
  });

  it('should return an array such that answer[i] is equal to the product of all the elements of nums except nums[i]', () => {
    const numbers = [-1,1,0,-3,3];
    console.log(productOfArrayExceptSelf(numbers));
    expect(productOfArrayExceptSelf(numbers)).toEqual([-0,0,9,-0,0]);
  });
});
