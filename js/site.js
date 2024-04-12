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

/* function checkForPalindrome(normalizedString, revString) {

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
} */

// Antonios Code

function checkForPalindrome(normalizedString) {
  let revString = '';

  // the object
  let returnObj = { msg: '', reversed: '' };

  revString = reverseString(normalizedString);

  if (normalizedString === revString) {
    returnObj.msg = "Well done! You have a palindrome."
  } else {
    returnObj.msg = "Sorry.. You do not have a palindrome."
  }

  returnObj.reversed = revString;

  return returnObj;

}

function displayResults(returnObj) {
  
  let msgAlert = document.getElementById('alert');
  let alertHeader = document.getElementById('alertHeader');
  
  if(returnObj.msg.includes('Sorry')) {
    msgAlert.classList.remove('alert-success');
    msgAlert.classList.add('alert-danger');
  } else {
    msgAlert.classList.remove('alert-danger');
    msgAlert.classList.add('alert-success');
  }

  alertHeader.innerHTML = returnObj.msg;
  document.getElementById('msg').innerHTML = `Your word reversed is: ${returnObj.reversed}`;

  msgAlert.classList.remove('invisible')
}
