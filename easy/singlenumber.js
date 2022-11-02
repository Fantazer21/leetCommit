const singleNumber = function(nums) {
    return nums.reduce((prev, curr) => prev ^ curr);
};