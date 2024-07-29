function fibonacci(num) {
	if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;
	var res = (fibonacci(num-1)+fibonacci(num-2));
	return res;
// your code here
}

module.exports = fibonacci;
