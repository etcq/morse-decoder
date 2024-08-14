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
    ' ': ' ',
};

function decode(expr) {
  const textMorse = []
  const wordsCode = [];
  const exprArr = [...expr];
  while (exprArr.length) {
    wordsCode.push(exprArr.splice(0, 10))
    }
  
  wordsCode.map(word => {
    let codeMorse = '';
    if (word.join('').includes('*')) {
      textMorse.push(' ');
    } else {
      while(word.length) {
        let letters = word.splice(0, 2).join('');
        if (letters === '10') {
            codeMorse += '.';
        } else if (letters === '11') {
            codeMorse += '-';
      }
    }
    }

    
    textMorse.push(codeMorse);
    });

  return textMorse.map(i => i = MORSE_TABLE[i]).join(''); 
  

  
}

module.exports = {
    decode
}