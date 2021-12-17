const intersect = (nums1, nums2) => {
    // 1] Iterate over larger array.
    // 2] Place values in an object hash.
    // 3] Test seconadry array against object hash.

    // if (nums1.length >= nums2.length) {
    //   lArr = nums1;
    //   sArr = nums2;
    // } else {
    //   lArr = nums2;
    //   sArr = nums1;
    // }

    const lArr = (nums1.length >= nums2.length) ? nums1 : nums2;
    const sArr = (nums1.length >= nums2.length) ? nums2 : nums1;
    const result = [];

    for (let i = 0; i <= sArr.length - 1; i++) {
      const indexOf = lArr.indexOf(sArr[i]);
      console.log('indexOf: ', indexOf);

      if (indexOf !== -1) {
        result.push(sArr[i]);
        lArr.splice(indexOf, 1);
      }
    }

    console.log('result: ', result);
    return result;
};



const nums1 = [1,2];
const nums2 = [1,1];
const expected = [1];
intersect(nums1, nums2);

export default intersect;