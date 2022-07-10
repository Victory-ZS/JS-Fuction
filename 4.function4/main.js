//- Create a new main.js file and write a function that calculates how many words a string contains.



function countWords(message){
    // wirte your code here
    var t = 0;
    for (var i = 1; i < message.length; i++) {
        if (message[i-1] == ' ' && message[i] !== ' ') t++;
    }
    if (message[0] !== ' ') console.log(t + 1);
    else console.log(t);

}
countWords('Good morning, I love JavaScript.'); // should return 5