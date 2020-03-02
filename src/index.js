const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};



function decode(str) {
    str = str.match(/.{1,10}/g)
    .map(el=>el.replace(/^0+/g, ''))
    .map(el=>el.match(/.{1,2}/g))
    .map(el=>el.map(item=>item=='**'?' ':item=='10'?'.':'-'))
    .map(el=>el.join(''));



    for (let i in str) {
    for (let key in MORSE_TABLE) {
        str[i]==key?str[i]=MORSE_TABLE[key]:null;
    }
    }

   return (str.join('').replace(/ +/g, ' '))
}

module.exports = {
    decode
}