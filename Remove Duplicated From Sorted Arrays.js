var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let uniqueIndex = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[uniqueIndex]){
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }

    return uniqueIndex + 1;
};

//Custom judge test
const testCases = [
    { input: [1, 1, 2], expected: { length: 2, array: [1, 2, '_'] } },
    { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: { length: 5, array: [0, 1, 2, 3, 4, '_', '_', '_', '_', '_'] } }
];

testCases.forEach((testCase, index) => {
    const input = testCase.input.slice(); // Copy the input array
    const expectedLength = testCase.expected.length;
    const expectedArray = testCase.expected.array;

    const k = removeDuplicates(input);

    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${testCase.input}`);
    console.log(`Output: ${k}, nums = [${input.join(', ')}, ${'_'.repeat(input.length - k)}]`);
    console.log(`Expected Length: ${expectedLength}`);
    console.log(`Expected Array: [${expectedArray.join(', ')}]`);
    console.log();
});