const readline = require('readline');
const c = require('ansi-colors');
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

exports.generatePassword1 = generatePassword;

function generatePassword(length, includeNumbers, includeSymbols) {
  let initialPass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (includeNumbers) {
    initialPass += '0123456789';
  }
  if (includeSymbols) {
    initialPass += '!@#$%^&*()_+-=[]{}|;:,.<>/?';
  }

  let password = '';

  if (initialPass.length !== 0) {
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * initialPass.length);
      password += initialPass[randomIndex];
    }
  } else {
    password += 'Select at least one category!)';
  }

  return password;
}

function pass() {
  read.question('Enter the length of the password: ', length => {
    length = parseInt(length);
    read.question('Include numbers? (y/n): ', includeNumbers => {
      includeNumbers = includeNumbers.toLowerCase() === 'y';
      read.question('Include symbols? (y/n): ', includeSymbols => {
        includeSymbols = includeSymbols.toLowerCase() === 'y';
        const password = generatePassword(length, includeNumbers, includeSymbols);
        console.log(c.bgYellowBright(`Your password is: ${password}`));
        read.close();
      });
    });
  });

}

pass();
