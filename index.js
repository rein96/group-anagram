const { superSortedAnagram, anagram } = require('./anagram');
console.log('--- Anagram ---');
const inputArray = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];
console.log('inputArray', inputArray);

console.log('superSortedAnagram', superSortedAnagram(anagram(inputArray)));
