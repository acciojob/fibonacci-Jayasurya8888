function fibonacci(num) {
	var res = (fibonacci(num-1)+fibonacci(num-2));
	return res;
// your code here
}

module.exports = fibonacci;
