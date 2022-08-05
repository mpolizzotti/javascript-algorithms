import { targetIndicesBruteForce, targetIndicesBinarySearch } from './find.target.indices.after.sorting.array.mjs';

describe('targetIndicesBruteForce', () => {
  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [1,2,5,2,3];
    const target = 2;
    expect(targetIndicesBruteForce(numbers, target)).toEqual([1,2]);
  });

  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [1,2,5,2,3];
    const target = 3;
    expect(targetIndicesBruteForce(numbers, target)).toEqual([3]);
  });

  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [11,34,78,38,8,41,97,15,16,18,97,36,21,11,85,83,36,11,45,17,93,95,70,12,16,18,13,89,97,20,86,46,24,50,45,94,89,25,61,59,51,72,74,55,4,41,47,46,45,75,93,2,61,99,39,74,49,83,53,54,22,55,89,98,48,44,87,74,25]
    45;
    const target = 45;
    expect(targetIndicesBruteForce(numbers, target)).toEqual([28,29,30]);
  });
});

describe('targetIndicesBinarySearch', () => {
  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [1,2,5,2,3];
    const target = 2;
    expect(targetIndicesBinarySearch(numbers, target)).toEqual([1,2]);
  });

  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [1,2,5,2,3];
    const target = 3;
    expect(targetIndicesBinarySearch(numbers, target)).toEqual([3]);
  });

  it('should return list of target indices of nums after sorting nums', () => {
    const numbers = [11,34,78,38,8,41,97,15,16,18,97,36,21,11,85,83,36,11,45,17,93,95,70,12,16,18,13,89,97,20,86,46,24,50,45,94,89,25,61,59,51,72,74,55,4,41,47,46,45,75,93,2,61,99,39,74,49,83,53,54,22,55,89,98,48,44,87,74,25]
    45;
    const target = 45;
    expect(targetIndicesBinarySearch(numbers, target)).toEqual([28,29,30]);
  });
});
