/* To reverse a String using Recursion */

function reverse(resultStr, length, actualString) {
  if (length === 0) {
    return resultStr;
  }
  resultStr = resultStr + actualString[--length];
  return reverse(resultStr, length, actualString);
}

String.prototype.strRev = function() {
  let resultStr = '';
  let length = this.length;
  return reverse('', length, this);
}

var myName = "Dhilip kumar";
console.log(myName.strRev());


/* To reverse a String using Non-recursive method */
// String.prototype.strRev = function() {
//   let resultRev = '';
//   for(let i = this.length - 1; i > -1; i--) {
//     resultRev = resultRev + this[i];
//   }
//   return resultRev;
// }