function fibonacci(num) {
	
// your code here
	 if (num === 0) return 0;
    if (num === 1) return 0; // Special case for handling the first Fibonacci number
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= num; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    return prev;
}
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
module.exports = fibonacci;
