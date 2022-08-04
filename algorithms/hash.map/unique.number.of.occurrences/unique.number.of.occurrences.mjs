const uniqueOccurrences = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] = map[arr[i]] + 1;
    }
  }

  const values = Object.values(map);
  return new Set(values).size === values.length;
};

const arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr));
export default uniqueOccurrences;
