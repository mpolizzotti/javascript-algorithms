import getConcatenation from "./concatenation.of.array.mjs";

describe('getConcatenation', () => {
  it('should return the concatenation of two arrays', () => {
    expect(getConcatenation([1,2,1])).toEqual([1,2,1,1,2,1]);
  });
});
