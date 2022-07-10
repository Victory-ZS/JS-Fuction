//- Create a new main.Js file, write a function, implement the following function: a string output in reverse order.


function reverseString(message){
    var l = message.length - 1;
    var result = [];
    for( var i=l;i>=0;i--){
        result[l-i] = message[i];
    }
    result = result.join("");
    console.log(result);
}
reverseString('hello'); // should return 'olleh'
