// ES5
// function exemplo(a, b, c) {
//   a = a === undefined ? 1 : a;
//   b = b === undefined ? 1 : b;
//   c = c === undefined ? 1 : c;
//   console.log(a, b, c);
// }
// exemplo(1,2,3);
/**
 * ES6
 * sobre escreve os valores passados na função
 */
function exemplo(a, b, c) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    if (c === void 0) { c = 3; }
    console.log(a, b, c);
}
exemplo(2, 6);
