var romanNumeral = function(n) {
var romanNumerals = []
var numbers = [1000, 500, 100, 50, 10, 5, 1]
var romans = ["M", "D", "C", "L", "X", "V", "I"]

for(var i=0; i<=numbers.length; i++)
  while (n >= numbers[i]) {
    romanNumerals.push(romans[i])
    n = n - numbers[i]
  }

  var result = romanNumerals.join("");
  result = result.replace("DCCCC", "CM");
  result = result.replace("CCCC", "CD");
  result = result.replace("LXXXX", "XC");
  result = result.replace("XXXX", "XL");
  result = result.replace("VIIII", "IX");
  result = result.replace("IIII", "IV");

return result
}
