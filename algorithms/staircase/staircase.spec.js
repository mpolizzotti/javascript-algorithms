import expectExport from "expect";
import staircase from "./staircase.mjs";

describe('staircase', () => {
  it('should return an object representing a right-justified staircase 4 levels deep', () => {
    const n = 4;
    const result = staircase(n);
    const expected = {
      '1': '   #',
      '2': '  ##',
      '3': ' ###',
      '4': '####'
    };
    expect(result).toEqual(expected);
  });

  it('should return an object representing a right-justified staircase 6 levels deep', () => {
    const n = 6;
    const result = staircase(n);
    const expected = {
      '1': '     #',
      '2': '    ##',
      '3': '   ###',
      '4': '  ####',
      '5': ' #####',
      '6': '######'
    };
    expect(result).toEqual(expected);
  });
});