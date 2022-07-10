//- Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end.For example, abcba is a palindrome string.)

    
function palindrome(message){
  // wirte your code here
    var len = message.length;
    for (var i = 0; i < len/2; i++) {
        if (message[i] != message[len - i - 1])
            break;
    }
    if (i < len / 2) {
        console.log('false');
    }
    else {
        console.log('true');
    }
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

