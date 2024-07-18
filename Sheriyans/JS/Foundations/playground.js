// JavaScript Web Browser API
// Handles browser-specific functionalities such as:
console.log("hello");
console.warn("hello");
console.error("hello");

// Browser-specific functions
// alert() displays an alert dialog.
alert("hey");

// prompt() displays a dialog with an input field.
prompt("hey");

// Variables and Constants
// var and let can change data
var a = 12;
var b = 15;
console.log(a + b); // Outputs: 27

// const doesn't change data
const c = 30;

// var has global scope
var globalVar = "I'm global";

// let has local scope
{
    let localVar = "I'm local";
    console.log(localVar); // Outputs: I'm local
}
// console.log(localVar); // ReferenceError: localVar is not defined

// Interpreter => goes line by line
// Compiler => First compiles code and then executes line by line

// JIT Compiler is used in Chrome
