/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	return n < 0 ? null : n === 0 ? 1 : n === 1 ? 1 : n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	var arr = [].concat.apply([], array);
	let anyArrays = false;
	console.log(arr);
	for(let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			anyArrays = true;
		};
	};


	return array.length === 0 ? 0 : anyArrays ? arraySum(arr) : arr[0] + sum(arr.slice(1))
	// return array.length === 0 ? 0 : Array.isArray(array[0]) === 0 ? 
};

// [[1], 2, 3]
// [1].pop()
// [1, 2, 3]

// 4. Check if a number is even.
var isEven = function(n) {
	return n < 0 ? isEven(-n) : n === 1 ? false : n === 0 ? true : isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	return n > 0 ? n === 0 ? 0 : (n - 1) + sumBelow(n - 1) : n === 0 ? 0 : (n + 1) + sumBelow(n + 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) { 
	return y - x === 0  || y - x === 1 || y - x === -1 ? [] : !Array.isArray(x) ? x > y ? range([x - 1], y) : range([x + 1], y) : x[0] - y === x.length || x[0] - y === x.length * -1  ? x : x[x.length - 1] > y ? range(x.concat([x[x.length - 1] - 1]) ,y) : range(x.concat([x[x.length - 1] + 1]) ,y) 
};

// 5, 3
// 5 - 3 === 2 === maxLength
// [4]

// 3, 5
// 3 - 5 === -2 === (maxLength) * -1
// [4]
// 4 - 5 === -1 === (maxLength) * -1 

// -3, 5
// -3, -5 === -8 ===  (1 + maxlength) * -1
// [-4]
// -4 -(-5) === -1 === maxLength * -1

//  5, -3
// 5 -(-3) === 8 ===  1 + maxlength
// [4]
// 4 - 5 === -1 === (maxLength) * -1 

// -3, -5 
// -3 -(-5) === 2 === 1 + maxlength
// [-4]

// -5, -3
// -5 -(-3) === -2 === (1 + maxlength) * -1
// [-4]


// myArray = new Array((x-y)*(x-y)/(x-y))

// if y === undefined
	// myArray[x] = x + 1
	// myArray[myArray.length - 1 ] !== undefined
	// range(x + 1)

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
	return exp === 0 ? 1 : exp === 1 ? base : exp > 0 ? base * exponent(base, exp - 1) :  exponent(base, exp + 1) / base
};

// 8 ^ -1 === 8 / 8 === 1
// 8 ^ -2 === 8 / 8 / 8 ==== (1/8)

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

var powerOfTwo = function(n) {
	return n === 1 ? true : n % 2 !== 0 || n === 0 ? false : powerOfTwo(n/2); 
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	let result = '';
	if (!Array.isArray(string)) {
		string = string.split('')
	};
	return string.length < 2 ? string : string.length === result.length ? result : result += string.pop() + reverse(string);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	return string.length === 0 ? true : string[0] !== string[string.length - 1] ? false : palindrome(string.slice(1, string.length - 1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	return y === 0 ? NaN : x > y && x > 0 && y > 0 ? x - y >= 0 ? modulo(x - y, y) : x : x < y && x > 0 && y > 0 ? x :  x < y && x < 0 && y > 0 ? x + y <= 0 ? modulo(x + y, y) : x  : x > y && x > 0 && y < 0 ? x + y >= 0 ? modulo(x + y, y) : x : x < y && x < 0 && y < 0 ? x - y <= 0 ? modulo(x - y, y) : x : x < 0 && y < 0 && x > y ? x - y <= 0 ? modulo(x - y, y) : x : x > y && x < 0 && y < 0 ? x : 0; 
};

// 10, 4 √
	// 10 - 4 === 6
	// 6 - 4 === 2
	// 2 - 4 === -2
	// 2

// 4, 10 √
	// 4 - 10 === -6
	// 4

// -10, 4 √
	// -10 + 4 === -6
	// -6 + 4 === -2
	// -2 + 4 === 2
	// -2

// 4, -10 √
	// 4 + -10 === -6
	// 4

// -4, 10 √
	// -4 + 10 === 6
	// -4

// 10, -4 √
	// 10 + -4 === 6
	// 6 + -4 === 2
	// 2 + -4 === 2
	// 2

// -10, -4
	// -10 - -4 === -6
	// -6 - -4 === -2
	// -2 - -4 === 2
	// -2

// -4, -10
	// -10 - -4 === -6
	// -6 - -4 === -2
	// -2 - -4 === 2
	// -2

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	return y === 0 ? 0 : y > 0 ? x + multiply(x, y - 1) : 0 - x + multiply(x, y + 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

	if(y === 0) { 
		return NaN;
	};

	if (x === y) {
		return 1;
	};

	if(x + x > x) { 
		if(y + y > y) { 

			if (x < y) {
				return 0;
			};

			if(x - y > 0) {
				return 1 + divide(x - y, y); 
			};

		} else {

			if(x + y < 0) {
				return 0;
			};

			if(x + y >= 0) {
				return 1 + divide(x + y, y);
			};

		};

	} else {
		if(y + y > y) {

			if(x + y > 0) {
				return 0;
			};

			if(x + y <= 0) {
				return 1 + divide(x + y, y);
			};

		} else {
			
			if(x - y >= 0) {
				return 0;
			};

			if(x - y <= 0) {
				return 1 + divide(x - y, y);
			};

		};
	};
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	
	if (x < 0 || y < 0) {
		return null;
	};

	if(x % y === 0) {
		return y;
	} else {
		return gcd(y , x % y)
	};1

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	return str1.length > 0 || str2.length > 0 ? str1[0] === str2[0] ? compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length)) : false : true;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	return str.length === 0 ? [] : [].concat(str[0]).concat(createArray(str.slice(1,str.length))); 
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	return array.length === 0 ? [] : [].concat(array[array.length - 1]).concat(reverseArr(array.slice(0, array.length - 1)))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	return length <= 0 ? [] : [value].concat(buildList(value, length - 1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	let myArray = [];
	if(n <= 0) {
		return [];
	} else {
		if(n % 3 === 0 && n % 5 === 0) {
			myArray.push('FizzBuzz');
		} else if (n % 3 === 0 ) {
			myArray.push('Fizz');
		} else if (n % 5 === 0 ) {
			myArray.push('Buzz');
		} else {
			myArray.push(String(n));
		};
		return fizzBuzz(n - 1).concat(myArray);
	};
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	return array.length === 0 ? 0 : array[0] === value ? 1 + countOccurrence(array.slice(1), value) : countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

	let myArray = array.slice();
	if(array.length === 0) {
		return myArray;
	} else {
		if (typeof callback === 'function'){
			myArray[0] = callback(myArray[0]);
		};
		return [myArray[0]].concat(rMap(myArray.slice(1), callback));
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	console.log('init', obj, obj === {} || obj.length === 0);
	let myArray = [];
	let result = 0;

	if(obj === {} || obj.length === 0) {
		result += 0;
	} else {
		if(Array.isArray(obj)) {
			myArray = obj;
		} else {
			for(let property in obj) {
				myArray.push([property, obj[property]]);
			};
			countKeysInObj(myArray, key);
		};

		if(myArray[0][0] === key) {
			result += 1;
			console.log('plus 1', result)
			if(typeof myArray[0][1] === 'object') {
				result += countKeysInObj(myArray[0][1], key);
			}  
			result += countKeysInObj(myArray.slice(1), key);
		} else {
			if(typeof myArray[0][1] === 'object') {
				result += countKeysInObj(myArray[0][1], key);
			}; 
			result += countKeysInObj(myArray.slice(1), key);
		}; 
	};
	return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	console.log('init', obj, obj === {} || obj.length === 0);
	let myArray = [];
	let result = 0;

	if(obj === {} || obj.length === 0) {
		result += 0;
	} else {
		if(Array.isArray(obj)) {
			myArray = obj;
		} else {
			for(let property in obj) {
				myArray.push([property, obj[property]]);
			};
			countValuesInObj(myArray, value);
		};

		if(myArray[0][1] === value) {
			result += 1;
			console.log('plus 1', result)
			result += countValuesInObj(myArray.slice(1), value);
		} else if(typeof myArray[0][1] === 'object') {
				result += countValuesInObj(myArray[0][1], value);
		}; 
		result += countValuesInObj(myArray.slice(1), value); 
	};
	return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	console.log(obj, oldKey, newKey);
	if(obj === {}) {
		return {};
	};

	for(let key in obj) {
		if(key === oldKey) {
			console.log('before', obj)
			obj[newKey] = obj[key];
			delete obj[key];
			console.log('after', obj);
		} else if(typeof obj[key] === 'object') {
			replaceKeysInObj(obj[key], oldKey, newKey);
		}; 
	};
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

	if(n <= 0){
		return null;
	};

    if (n < 2) {
        return [0, 1];   
    }
    if (n < 3) {
        return [0, 1, 1];
    };

	let myArray = fibonacci(n - 1);
	myArray.push(myArray[n - 2] + myArray[n - 1]);
    return myArray;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

	if(n < 0) {
		return null;
	};

	if(n === 0) {
		return 0;
	}

	if(n === 1) {
		return 1;
	};

	if(n === 2) {
		return 1;
	};

	if(n > 2) {
		return nthFibo(n-1) + nthFibo(n-2);
	};
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
		return array.length <= 0 ? array : [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	return array.length <= 0 ? array : array[0][0] = [array[0][0].toUpperCase().concat(array[0].slice(1))].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

	let result = 0;

	if(obj === {}) {
		return 0;
	};

	for(key in obj) {
		if(obj[key] % 2 === 0) {
			result += obj[key];
		};
		if(typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		};
	};
	return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

	let myArray = [];
	
	if(array.length === 0) {
		return [];
	};
	for(let i = 0; i < array.length; i++) {
		if(Array.isArray(array[i])) {
			myArray = myArray.concat(flatten(array[i]));
		} else {
			myArray = myArray.concat(array[i]);
		};
	};
	return myArray;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

	if(obj === undefined) {
		obj = {};
	};

	if(str.length === 0) {
		return obj;
	};
	if(str.length > 0) {
		if(obj.hasOwnProperty(str[0])) {
			obj[str[0]]++;
		} else {
			obj[str[0]] = 1;
		};
		return letterTally(str.slice(1), obj);
	};
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	console.log(list);
	if(list.length === 0) {
		return [];
	};

	if(list[0] === list[1]) {
		list = compress(list.slice(1));
	} else {
		list = [list[0]].concat(compress(list.slice(1)));
	};
	console.log('end', list)
	return list;
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

	// let myArray = [];
	console.log(array);
	if(array.length === 0) {
		return array;
	};

	// if(Array.isArray(array[0])) {
	// 	array[0] = [array[0], aug];
	// } else {
	// 	array[0] = [array[0]].push(aug);
	// };
	array[0] = [array[0], aug]
	array = array[0].push(augmentElements(array.slice(1), aug));
	// augmentElements(array.slice(1), aug);
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
