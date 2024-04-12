// Display the message the user entered. 
function getValues() {

  let originalString = document.getElementById('inputString').value;
  // reverse the string
  let revString = reverseString(originalString)
  // check original to see if equals reverse
  let isPalindrome = checkForPalindrome(originalString, revString);
  // display the 3 values in a message
  displayResults(isPalindrome, originalString, revString);

}

function reverseString (originalString) {

  let reverseString = '';
  
  // radar
  for (let index = originalString.length - 1; index >= 0; index--) {
    
    // r + a + d + a + r
    reverseString += originalString[index];

  }

  return reverseString;
}

function checkForPalindrome(originalString, revString) {

  if (originalString == revString) {
    return true; 
  } else {
    return false;
  }

}

function displayResults(isPalindrome, originalString, revString) {

  document.getElementById('alert').classList.remove('invisible');
  document.getElementById('msg').innerHTML = `Your string reversed is: <strong>${revString}</strong>`

}