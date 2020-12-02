let name = 'Andrew Mead';

// Length PROPERTY
console.log(name.length);

// METHODS

// Uppercase
console.log(name.toUpperCase());

// Lowercase
console.log(name.toLowerCase());

// Includes
let password = 'abc123asdf098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asdfg'));
console.log(isValidPassword('abc1232929832'));
console.log(isValidPassword('sakdfjlaksdjfkasjpasswordlka'));
