// - Create a new main.js file and write a function that outputs the incoming argument string alphabetically.


function alphabetSort(message){  //�ַ����е��ַ�����ֱ���޸�
  // wirte your code here
    var len = message.length;;
    message = message.split(''); //���Ϊ����
    for (var i = 0; i < len-1; i++) {
        for (var j = 0; j < len-i-1; j++) {
            if (message[j] > message[j + 1]) {
               
                var temp = message[j];
                message[j] = message[j+1];
                message[j+1] = temp;
                
            }
        }
    }
    message = message.join(''); //�ϲ�Ϊ�ַ���
    console.log(message);
}
alphabetSort('hello'); // should return 'ehllo'
