// js/languages/matlab.js
const languageData = {
  name: "MATLAB",

  definition:
    "MATLAB (Matrix Laboratory) is a high-performance language developed by MathWorks for numerical computing, data analysis, algorithm development, and visualization.",

  history:
    "MATLAB was developed in the late 1970s by Cleve Moler. It became widely used in engineering, science, and academia for its matrix manipulation capabilities.",

  features: [
    "Matrix-based computation",
    "Built-in graphics for data visualization",
    "Toolboxes for various domains (signal processing, image processing, etc.)",
    "Scripting and algorithm development",
    "Used in engineering, AI, and control systems"
  ],

  basics: {
    helloWorld:
      'disp("Hello, MATLAB!")',
    variables:
      'x = 5;\ny = "Hello";',
    comments:
      '% This is a single-line comment'
  },

  dataTypes: {
    types:
      'double, single, int8, int16, int32, logical, char, string, cell, struct',
    example:
      'A = [1, 2, 3];\nB = {1, "text", true};\nS = struct("name", "John", "age", 30);'
  },

  operators: {
    arithmetic: '+, -, *, /, .*, ./, ^',
    comparison: '==, ~=, >, <, >=, <=',
    logical: '&, |, ~, &&, ||',
    example:
      'a = 10;\nb = 3;\nc = a + b;'
  },

  controlFlow: {
    ifElse:
      'if x > 0\n  disp("Positive")\nelse\n  disp("Zero or Negative")\nend',
    forLoop:
      'for i = 1:5\n  disp(i)\nend',
    whileLoop:
      'i = 1;\nwhile i <= 3\n  disp(i)\n  i = i + 1;\nend'
  },

  functions: {
    defFunc:
      'function r = add(a, b)\n  r = a + b;\nend',
    callFunc:
      'result = add(4, 5);\ndisp(result);'
  },

  fileHandling: {
    readWrite:
      'fid = fopen("file.txt", "w");\nfprintf(fid, "Hello World\n");\nfclose(fid);\n\nfid = fopen("file.txt", "r");\ndata = fread(fid);\nfclose(fid);'
  },

  errorHandling: {
    tryCatch:
      'try\n  x = 1/0;\ncatch ME\n  disp("Error occurred")\n  disp(ME.message)\nend'
  },

  examples: {
    factorial:
      'function f = fact(n)\n  if n <= 1\n    f = 1;\n  else\n    f = n * fact(n - 1);\n  end\nend',
    palindrome:
      'str = "madam";\nrev = reverse(str);\nif strcmp(str, rev)\n  disp("Palindrome")\nend'
  },

  useCases: [
    "Signal and image processing",
    "Control systems",
    "Numerical analysis and simulation",
    "Machine learning",
    "Academic and industrial R&D"
  ],

  references: {
    keywords: ["if", "else", "for", "while", "function", "end", "try", "catch"],
    builtins: ["disp", "fopen", "fclose", "fprintf", "fread", "mean", "sum"],
    toolboxes: ["Signal Processing Toolbox", "Image Processing Toolbox", "Statistics Toolbox"]
  }
};
