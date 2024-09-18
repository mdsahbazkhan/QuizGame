export const questions = [
    // Beginner-Level Questions (15 Questions)
    {
      questionText: "Which of the following is used to declare a variable in JavaScript?",
      options: ["let", "var", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      questionText: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Apple", "Google"],
      answer: "Netscape",
    },
    {
      questionText: "What does `typeof []` return in JavaScript?",
      options: ["array", "object", "undefined", "null"],
      answer: "object",
    },
    {
      questionText: "Which method is used to remove the last element from an array?",
      options: ["pop()", "push()", "shift()", "unshift()"],
      answer: "pop()",
    },
    {
      questionText: "What is the correct syntax for referring to an external script in HTML?",
      options: ['<script href="app.js">', '<script src="app.js">', '<script ref="app.js">', '<script link="app.js">'],
      answer: '<script src="app.js">',
    },
    {
      questionText: "How do you declare a JavaScript function?",
      options: [
        "function myFunction()",
        "let function myFunction()",
        "myFunction = function",
        "function = myFunction()",
      ],
      answer: "function myFunction()",
    },
    {
      questionText: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "===", "!="],
      answer: "=",
    },
    {
      questionText: "How can you add a comment in JavaScript?",
      options: ["<!-- This is a comment -->", "// This is a comment", "' This is a comment", "` This is a comment"],
      answer: "// This is a comment",
    },
    {
      questionText: "What is the correct way to create an array in JavaScript?",
      options: [
        "let arr = new Array(1,2,3)",
        "let arr = (1,2,3)",
        "let arr = Array[1,2,3]",
        "let arr = 1,2,3",
      ],
      answer: "let arr = new Array(1,2,3)",
    },
    {
      questionText: "Which of the following is a looping structure in JavaScript?",
      options: ["for", "if", "let", "const"],
      answer: "for",
    },
    {
      questionText: "How do you find the length of an array in JavaScript?",
      options: ["arr.length", "arr.size()", "arr.length()", "arr.size"],
      answer: "arr.length",
    },
    {
      questionText: "Which built-in method sorts the elements of an array?",
      options: ["sort()", "order()", "arrange()", "orderBy()"],
      answer: "sort()",
    },
    {
      questionText: "Which of the following is a primitive data type in JavaScript?",
      options: ["Boolean", "Array", "Object", "Function"],
      answer: "Boolean",
    },
    {
      questionText: "How do you write `Hello World` in an alert box?",
      options: [
        "alertBox('Hello World')",
        "alert(Hello World)",
        "alert('Hello World')",
        "msg('Hello World')",
      ],
      answer: "alert('Hello World')",
    },
    {
      questionText: "Which method can be used to round a number to its nearest integer?",
      options: ["round()", "Math.round()", "Math.ceil()", "Math.floor()"],
      answer: "Math.round()",
    },
  
    // Intermediate-Level Questions (15 Questions)
    {
      questionText: "Which function is used to convert a string to an integer?",
      options: ["Number()", "parseInt()", "parseFloat()", "Int()"],
      answer: "parseInt()",
    },
    {
      questionText: "What will `console.log(typeof null)` output in JavaScript?",
      options: ["null", "object", "undefined", "string"],
      answer: "object",
    },
    {
      questionText: "What will `console.log(0.1 + 0.2 === 0.3)` return?",
      options: ["true", "false", "undefined", "NaN"],
      answer: "false",
    },
    {
      questionText: "How do you find the largest number in an array `[3, 5, 2, 9, 6]`?",
      options: ["Math.max(...arr)", "Math.max(arr)", "Math.largest(arr)", "Math.max.apply(arr)"],
      answer: "Math.max(...arr)",
    },
    {
      questionText: "Which of the following is a correct way to declare an object in JavaScript?",
      options: ['let obj = {}', 'let obj = Object.create()', 'let obj = new Object()', 'All of the above'],
      answer: 'All of the above',
    },
    {
      questionText: "What is the output of `console.log('5' + 3)`?",
      options: ["8", "53", "5", "undefined"],
      answer: "53",
    },
    {
      questionText: "Which of the following methods adds an element to the beginning of an array?",
      options: ["push()", "unshift()", "pop()", "shift()"],
      answer: "unshift()",
    },
    {
      questionText: "Which of the following can be used to iterate over an array?",
      options: ["for", "forEach()", "map()", "All of the above"],
      answer: "All of the above",
    },
    {
      questionText: "What is the purpose of the `this` keyword in JavaScript?",
      options: [
        "It refers to the current object.",
        "It refers to the previous object.",
        "It refers to the current function.",
        "It refers to the global object.",
      ],
      answer: "It refers to the current object.",
    },
    {
      questionText: "What does the `reduce()` method do in JavaScript?",
      options: [
        "It reduces the size of the array.",
        "It executes a reducer function on each element of the array and returns a single value.",
        "It reduces the array to unique elements.",
        "It reduces the number of elements in an array by half.",
      ],
      answer:
        "It executes a reducer function on each element of the array and returns a single value.",
    },
    {
      questionText: "What is the output of `console.log(3 + '3')`?",
      options: ["6", "33", "NaN", "undefined"],
      answer: "33",
    },
    {
      questionText: "Which method is used to remove the first element of an array?",
      options: ["shift()", "unshift()", "pop()", "splice()"],
      answer: "shift()",
    },
    {
      questionText: "What will `console.log([] == ![])` return?",
      options: ["true", "false", "NaN", "SyntaxError"],
      answer: "true",
    },
    {
      questionText: "How can you check if a variable is an array?",
      options: ["Array.isArray(var)", "typeof var == 'array'", "var.isArray()", "None of the above"],
      answer: "Array.isArray(var)",
    },
    {
      questionText: "Which method converts an array to a string?",
      options: ["toString()", "join()", "concat()", "slice()"],
      answer: "toString()",
    },
  
    // Advanced-Level Questions (15 Questions)
    {
      questionText: "What will the following code output?\n```js\n(function(){\n  var a = b = 5;\n})();\nconsole.log(b);\n```",
      options: ["ReferenceError", "undefined", "5", "TypeError"],
      answer: "5",
    },
    {
      questionText: "Which method can be used to merge two or more arrays?",
      options: ["concat()", "push()", "merge()", "join()"],
      answer: "concat()",
    },
    {
      questionText: "What is the purpose of closures in JavaScript?",
      options: [
        "To encapsulate variables and provide data privacy.",
        "To bind `this` to a function.",
        "To extend object prototypes.",
        "To optimize performance.",
      ],
      answer: "To encapsulate variables and provide data privacy.",
    },
    {
      questionText: "What is the result of `1 + '1'` in JavaScript?",
      options: ["2", "11", "NaN", "SyntaxError"],
      answer: "11",
    },
    {
      questionText: "Which method is used to iterate over all elements in an array and return a new array?",
      options: ["forEach()", "map()", "filter()", "reduce()"],
      answer: "map()",
    },
    {
        questionText: "What will the following code output?\n```js\nconsole.log(typeof NaN);\n```",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        answer: "'number'",
      },
      {
        questionText: "What will the following code output?\n```js\n(function(){\n  var a = b = 5;\n})();\nconsole.log(b);\n```",
        options: ["ReferenceError", "undefined", "5", "TypeError"],
        answer: "5",
      },
      {
        questionText: "Which method can be used to merge two or more arrays?",
        options: ["concat()", "push()", "merge()", "join()"],
        answer: "concat()",
      },
      {
        questionText: "What is the purpose of closures in JavaScript?",
        options: [
          "To encapsulate variables and provide data privacy.",
          "To bind `this` to a function.",
          "To extend object prototypes.",
          "To optimize performance.",
        ],
        answer: "To encapsulate variables and provide data privacy.",
      },
      {
        questionText: "What is the result of `1 + '1'` in JavaScript?",
        options: ["2", "11", "NaN", "SyntaxError"],
        answer: "11",
      },
      {
        questionText: "Which method is used to iterate over all elements in an array and return a new array?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "map()",
      },
      {
        questionText: "What will the following code output?\n```js\nconsole.log(typeof NaN);\n```",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        answer: "'number'",
      },
      {
        questionText: "How can you create a new instance of an object using a constructor function?",
        options: ["new Object()", "new Constructor()", "new Object(Constructor)", "new Constructor()"],
        answer: "new Constructor()",
      },
      {
        questionText: "What will be the output of `console.log(1 + '1' - 1)`?",
        options: ["11", "10", "1", "NaN"],
        answer: "10",
      },
      {
        questionText: "What is the purpose of the `bind()` method in JavaScript?",
        options: [
          "To create a new function with a specified `this` value.",
          "To bind two functions together.",
          "To extend the prototype chain.",
          "To merge objects.",
        ],
        answer: "To create a new function with a specified `this` value.",
      },
      {
        questionText: "Which method allows you to execute a function for each element of an array and return a new array?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "map()",
      },
      {
        questionText: "What does the `Object.keys()` method return?",
        options: ["An array of an object's keys.", "An array of an object's values.", "An array of an object's entries.", "An array of an object's prototypes."],
        answer: "An array of an object's keys.",
      },
      {
        questionText: "What will be the output of `console.log([] + [])`?",
        options: ["''", "[]", "NaN", "undefined"],
        answer: "''",
      },
      {
        questionText: "How can you create a new promise in JavaScript?",
        options: ["new Promise(executor)", "Promise.create(executor)", "new Promise.resolve(executor)", "Promise.new(executor)"],
        answer: "new Promise(executor)",
      },
      {
        questionText: "Which method is used to add one or more elements to the end of an array and returns the new length of the array?",
        options: ["push()", "pop()", "unshift()", "splice()"],
        answer: "push()",
      },
      {
        questionText: "What is the purpose of the `async` keyword in JavaScript?",
        options: [
          "To define a function that always returns a promise.",
          "To create a synchronous function.",
          "To handle errors in synchronous code.",
          "To define a callback function.",
        ],
        answer: "To define a function that always returns a promise.",
      },
      {
        questionText: "What will be the output of `console.log(!!'false')`?",
        options: ["true", "false", "undefined", "NaN"],
        answer: "true",
      },
    ];
  