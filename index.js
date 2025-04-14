// 1.
function stringToArray(str) {
  return str.split(' ');
}

// 2.
function removeChars(str, length) {
  return str.substring(0, length);
}

// 3.
function insertDash(str) {
  return str.toUpperCase().replace(/ /g, '-');
}

// 4.
function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 5.
function capitalize(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 6.
function changeRegister(str) {
  return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

// 7.
function removeChar(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '');
}

// 8.
function zeros(num, len) {
  let str = num.toString();
  while (str.length < len) {
    str = '0' + str;
  }
  return (num >= 0 ? '+' : '-') + str;
}

// 9.
function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

// 10.
function insensitiveSearch(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

// 11.
function initCap(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// 12.
function initSnake(str) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// 13.
function repeatStr(str, n) {
  return str.repeat(n);
}

// 14.
function path(pathname) {
  return pathname.substring(pathname.lastIndexOf("\\") + 1);
}

// 15.
function endsWith(str, substr) {
  return str.endsWith(substr);
}

// 16.
function getSubstr(str, char, pos) {
  const index = str.indexOf(char);
  return pos === 'after' ? str.substring(index + 1) : str.substring(0, index);
}

// 17.
function insert(str, substr, pos = 0) {
  return str.slice(0, pos) + substr + str.slice(pos);
}

// 18.
function limitStr(str, n, symbol = '...') {
  return str.length > n ? str.slice(0, n) + symbol : str;
}

// 19.
function count(str, stringsearch) {
  return (str.match(new RegExp(stringsearch, 'g')) || []).length;
}

// 20.
function strip(str) {
  return str.trim().replace(/\s+/g, ' ');
}

// 21.
function cutString(str, n) {
  return str.split(' ').slice(0, n).join(' ');
}

// 22.
function findWord(word, str) {
  return str.split(' ').includes(word);
}
