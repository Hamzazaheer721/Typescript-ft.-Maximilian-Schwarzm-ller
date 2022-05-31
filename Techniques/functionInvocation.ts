////////////////////
// FUNCTION CALL //
//////////////////

// Call method can be used to write a method which could be used on different objects.
// With call(), an object can use a method belonging to another object.


const person = {
    name: "Hamza",
    getName: function (...args) {
        return this.name + " " + args.join('');
    },
    getNameForApply: function (args = [""]) {
        return this.name + " " + args.join('');
    }
}

console.info(person.getName()); // Hamza
console.info(person.getName.call({name: "Haroon"}, "is my name!")) // Haroon is my name!
console.info(person.getName.call({name: "Arif"}, "is your name", "!")) // Arif is your name!


/////////////////////
// FUNCTION APPLY //
///////////////////

// Apply is similar to Call i.e., lets an object us the method of another object
// The only difference between apply and call is that apply() expects the arguments in array while call() takes arguements seperately.


console.info(person.getNameForApply.call({name: "Aslam"})) // Aslam
console.info(person.getNameForApply.call({name: "Amin"}, ["is my name!"])) // Aslam is your name!
console.info(person.getNameForApply.call({name: "Amin"}, ["is your name", "!"])) // Aslam is your name!

///////////////
// USE CASE //
/////////////

// Math.max is used to get the maximum value from numbers given

console.info(Math.max(1, 2, 3)) // 3

// For Arrays, It can't be used
console.info(Math.max([1, 2, 3])) // NaN

// Work Around # 1 (We can use spread Operator)
console.info(Math.max(...[1, 2, 3])) // 3

// Work Around # 2 (We can use apply())
console.info(Math.max.apply(null, [1, 2, 3])) // 3

// null is not used in this example so it doesn't matter. We can similarly use Math, "", 0.

console.info(Math.max.apply(true, [1, 2, 3])) // 3
