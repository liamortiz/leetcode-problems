/* --- Description ---
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
console.log(twoSum([3, 2, 4], 6));


/*--- Explaination --- 
Through each iteration we save the element and it's index
We subtract the target from every element
If the difference has already been saved in the map
Return their indices

map => [3:0, 2:1, 4:2]

6 - 3 => 3 => Not In Map Iteration #1
6 - 2 => 4 => Not In Map Iteration #2
6 - 4 => 2 => In Map (2:1, 4:2) is returned

*/