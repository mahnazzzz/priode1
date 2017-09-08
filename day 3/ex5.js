function f(x, y, ...rest) {
    return `Sum: ${x + y}.\n${rest.map((el, i) => `rest value ${i} is a:${el.constructor.name}`).join(",\n")}`
}
console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));
//b
var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));
//c
var chars = [...f(5, 2, ...restParams)];
if (0) console.log(chars); 