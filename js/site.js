// Display the message the user entered. 
function getValues() {

  let originalString = document.getElementById('inputString').value;
  // remove all excess characters
  normalizedString = originalString.toLowerCase().replace(/[\W_]/g, '');
  // reverse the string 
  let revString = reverseString(normalizedString)
  // check original to see if equals reverse
  let isPalindrome = checkForPalindrome(normalizedString, revString);
  // display the 3 values in a message
  displayResults(isPalindrome, normalizedString, revString);

}

function reverseString(normalizedString) {

  let reverseString = '';

  // radar
  for (let index = normalizedString.length - 1; index >= 0; index--) {

    // r + a + d + a + r
    reverseString += normalizedString[index];

  }

  return reverseString;
}

function checkForPalindrome(normalizedString, revString) {

  if (normalizedString == revString) {
    return true;
  } else {
    return false;
  }

}

function displayResults(isPalindrome, reverseString) {

  if (isPalindrome == true) {
    document.getElementById('msg').innerHTML = `<strong>Well Done!</strong> your word "${reverseString}" is a palindrome!`
  }

  else {
    document.getElementById('msg').innerHTML = `<strong>Oops..</strong> your word "${reverseString}" is not a palindrome.`
  }

  document.getElementById('alert').classList.remove('invisible');
}
