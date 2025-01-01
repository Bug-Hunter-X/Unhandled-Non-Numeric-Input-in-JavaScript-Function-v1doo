function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  // Check if both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN for non-numeric input
  }
  return a + b; // Perform addition only if both are numbers
}
// Test cases
console.log(foo(5, 3)); // Output: 8
console.log(foo(null, 3)); // Output: null
console.log(foo('5', 3)); // Output: NaN
console.log(foo(5, 'abc')); // Output: NaN