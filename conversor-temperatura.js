// conversor de temperatura em kelvin, celsius, fahrenheit e newton.

const kelvin= 293;
console.log(kelvin);

let celsius = kelvin - 273;
console.log(celsius);

let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(newton);
