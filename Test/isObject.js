Object.isObject = function (obj) {
    // return (obj instanceof Object);
    return typeof obj === 'object' && obj !== null;
};

const map = new Map()
map.set(1, 2)

const arr = [];
const obj1 = {};
const obj2 = [{}, { big: 5555566666 }];
const obj3 = { name: '23' };
const str = "";
const date = new Date(Date());
const regex = new RegExp();

// Map 
console.log(Object.isObject(map)); // true
// Array	
console.log(Object.isObject(arr));	// true

// Empty object
console.log(Object.isObject(obj1));	// true

// Array of objects
console.log(Object.isObject(obj2));	// true

// Object
console.log(Object.isObject(obj3));	// true

// Empty object
console.log(Object.isObject({}));	  // true

// Empty string
console.log(Object.isObject(str));	// false

// null
console.log(Object.isObject(null));	// false

// undefined
console.log(Object.isObject(undefined));	// false

// function
console.log(Object.isObject(function (x) { return x }));	// true

// Date
console.log(Object.isObject(date));	// true

// RegExp
console.log(Object.isObject(regex));	// true