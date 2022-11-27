const twoSum = function (nums, sum) {
    if (nums.length === 2) return [0, 1];
    let obj = {};
    for (let i = 0; i < nums.length + 1; i++) {
        let result = sum - nums[i];
        if (obj[result] !== undefined) return [obj[result], i];
        else obj[nums[i]] = i;
    }
};


test