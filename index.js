"use strict";
//Decleration
let coding;
//Assigning value
coding = "Code with hooriya";
console.log(coding);
let hello = "hello world!!";
console.log(hello);
let user = "alsa", age = 16, message = "hello world";
console.log(user, age, message);
// That might seem shorter, but we don’t recommend it. For the sake of better readability, 
// please use a single line per variable.
// The multiline variant is a bit longer, but easier to read:
let user1 = "Saif";
let age1 = 21;
let message1 = "Hi";
console.log(user1, age1, message1);
// Some people also define multiple variables in this multiline style:
let user2 = "Adil", age2 = 32, message2 = "Hi Dear";
console.log(user2, age2, message2);
// …Or even in the “comma-first” style:
let user3 = "Moiz", age3 = 24, message3 = "Hey, how are you?";
console.log(user3, age3, message3);
// We can also change it as many times as we want:
let fruit = "Apple";
fruit = "Grapes"; // Value Change
console.log(fruit);
let learn = "I am Learning TypeScript";
let messages;
messages = learn;
console.log(learn);
console.log(messages);
// A repeated declaration of the same variable is an error:
let happy = "I am Happy";
// let happy: string = " show Error";   
// Variable Names
let userName = "Yasir";
let test123 = "Hello";
let $ = 1;
let _ = 2;
console.log($ + _);
// These are the examples of incorrect variable names: (Shows Error)
// let 3a: string = "Karachi";      (cannot start with a digit)
// let my-name: string = "Alice";   (hyphens '-' aren't allowed in the name)
// There is a list of reserved words, which cannot be used as variable names 
// because they are used by the language itself.
// For example: let, class, return, and function are reserved.
// let let: number = 5;       // Error
// let return: number = 5;    // Error
// num: number = 7;  // Error (in the place of num varaible should be use here..)
// CONSTANT
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '18.04.1982';
// TASKS 1
let admin;
let namee;
namee = "John";
admin = namee;
console.log(admin); // Outputs: John
// TASK 2
let Earth = "Our Planet";
let currentUser = "Alsa";
// TASK 3
const Birthday = "10.02.2007";
const personAge = 17;
