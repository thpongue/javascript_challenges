function fizzBuzz(val) {
	var ret = '';
	if (isFizz(val)) {
		ret = 'fizz';
	}

	if (isBuzz(val)) {
		ret += 'buzz';
	}

	if (!ret) {
		ret = val.toString();
	}
	return ret;
}

function isFizz(val) {
	return isDivisibleBy(val,3) || includesNumber(val, 3);
}

function isBuzz(val) {
	return isDivisibleBy(val,7) || includesNumber(val, 7);
}

function isDivisibleBy(val, divisibleBy) {
	return (val % divisibleBy === 0); 
}

function includesNumber(val, includesNumber) {
	return val.toString().indexOf(includesNumber)>-1; 
}
