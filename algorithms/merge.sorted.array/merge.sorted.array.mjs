const mergeAlternativeSolution = (nums1, m, nums2, n) => {
  const filler = new Array(m).fill(0, 0);
  const nums3 = filler.concat(nums2);

  for (let i = 0; i <= (m + n - 1); i++ ) {
    if (i >= m ) {
      nums1.splice(i, 1, nums3[i])
    }
  }

  return nums1.sort((a, b) => a - b);
};

const merge = (nums1, m, nums2, n) => {
  let insertPosition = m + n - 1;
  let i = 0;

  while (n > 0) {
    nums1[insertPosition--] = nums2[i];
    i++;
    n--;
  }

  return nums1.sort((a, b) => a - b);
}

export { merge, mergeAlternativeSolution };