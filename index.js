function isPalindrome(word) {
  if (word.length <= 1) {
    return true
  } else {
    if(word[0] === word[word.length - 1]) {
      isPalindrome(word.slice(1, -1))
      return true
    } else {
      return false
    }
  }
}
/* 
  Add your pseudocode here
  IF the word is less than or equal to 1 THEN
  RETURN true
  ELSE if the first letter of the word equals the last letter of the word THEN
  RETURN true
  ELSE THEN
  RETURN false
*/

/*
  Add written explanation of your solution here

  First part means if the word put in happens to be a letter then it is true.
  The second part says if the first letter is the same as the last then it is true and it keeps checking the word as it goes in by removing first and last letter.
  Third part says if it doesnt pass either test then it is false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
