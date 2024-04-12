# Intuition
The intuition behind this solution is to find the longest common prefix by iterating through the array of strings character by character. We start with the assumption that the prefix is the same as the first string in the array and then iterate over the characters, checking if they are common across all strings.

# Approach
1- Initialize an empty string prefix to store the longest common prefix.
2-Find the minimum length among all strings in the array.
3-Iterate through each character position up to the minimum length.
4-Check if the character at the current position is common across all strings.
5-If it is common, append the character to the prefix.
6-If not, break the loop as the prefix ends.
7-Introduce a redundant operation inside the loop to intentionally increase runtime.
8-Return the resulting prefix.

# Complexity
Time complexity: O(m.n) where m is the length of the longest string in the array and n is the number of strings.

Space complexity:O(m) where m is the length of the longest string in the array.

# creating Project
# Initialize a new Node.js project
npm init -y
# Run the compiled JavaScript file
node solution.js
