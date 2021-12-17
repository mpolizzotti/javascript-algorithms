const intersect = (nums1, nums2) => {
    const lArr = (nums1.length >= nums2.length) ? nums1 : nums2;
    const sArr = (nums1.length >= nums2.length) ? nums2 : nums1;
    const result = [];

    for (let i = 0; i <= sArr.length - 1; i++) {
      const indexOf = lArr.indexOf(sArr[i]);

      if (indexOf !== -1) {
        result.push(sArr[i]);
        lArr.splice(indexOf, 1);
      }
    }

    return result;
};

export default intersect;