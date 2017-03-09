const assert = require('assert');
class Utils {
  hexToBinary (hexStr) {
    return parseInt(hexStr).toString(2);
  }
  hexToDecimal (hexStr) {
    return parseInt(hexStr).toString(10);
  }
  binaryToHex (binStr) {
    binStr = this.handleForBinaryString(binStr);
    return '0x' + parseInt(binStr, 2).toString(16);
  }
  binaryToDecimal (num) {
    num = this.handleForBinaryString(num);
    return parseInt(num, 2).toString(10);
  }
  handleForBinaryString (num) {
    return String(num).replace(/\s/g, '');
  }
  decimalToBinary (num) {
    return num.toString(2);
  }
  decimalToHex (num) {
    return '0x' + num.toString(16);
  }
  decimalToOther (num) {
    console.info('The input is => %s', num);
    console.info('Binary => %s', this.decimalToBinary(num));
    console.info('Hex => %s', this.decimalToHex(num));
  }
  binaryToOther (num) {
    console.info('The input is => %s', num);
    console.info('Decimal => %s', this.binaryToDecimal(num));
    console.info('Hex => %s', this.binaryToHex(num));
  }
  hexToOther (num) {
    console.info('The input is => %s', num);
    console.info('Binary => %s', this.hexToBinary(num));
    console.info('Decimal => %s', this.hexToDecimal(num));
  }
  print (ary, fn) {
    return ary.forEach(item => fn.call(this, item));
  }
  printHex (ary) {
    return this.print(ary, this.hexToOther);
  }
  printBinary (ary) {
    return this.print(ary, this.binaryToOther);
  }
  printDecemal (ary) {
    return this.print(ary, this.decimalToOther);
  }
  test () {
    assert.equal(this.hexToBinary(0x173a4c), '101110011101001001100');
    assert.equal(this.binaryToHex(101110011101001001100), '0x173a4c');
  }
}
const util = new Utils();
util.printHex([0x52, 0xac, 0xe7]);

util.printBinary(['00110111', '10001000', '11110011']);

util.printDecemal([167, 62, 188]);

function toHex (str) {
  return '0x' + str.toString(16)
}
console.info(toHex(0x503c + 0x8))
console.info(toHex(0x503c - 0x40))
console.info(toHex(0x503c + 64))
console.info(toHex(0x50ea -  0x503c))
