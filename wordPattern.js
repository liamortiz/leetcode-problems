/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

a -> 0
b -> 1

dog -> 0
cat -> 1

Expected pattern -> 0 1 1 0

---Constraints---
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

function wordPattern(pattern, s) {

    const str = s.split(" ");
    const set1 = [...new Set(str).values()];
    const set2 = [...new Set(pattern).values()];

    if (set1.length !== set2.length) return false;

    for (let i = 0; i < str.length; i++) {
        const index1 = set1.indexOf(str[i])
        const index2 = set2.indexOf(pattern[i]);

        if (index1 !== index2) {
            return false;
        }
    }

    return true;
}

console.log(wordPattern('jquery', 'jquery'));