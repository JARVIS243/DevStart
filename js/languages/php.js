// js/languages/php.js
const languageData = {
  name: "PHP",

  definition:
    "PHP (Hypertext Preprocessor) is a server-side scripting language especially suited for web development. It is used to create dynamic web pages and can interact with databases.",

  history:
    "PHP was created by Rasmus Lerdorf in 1994. It has evolved into a powerful language with support for OOP, frameworks, and large-scale applications like WordPress and Facebook.",

  features: [
    "Server-side execution",
    "Embedded in HTML",
    "Database interaction",
    "Cross-platform",
    "Support for Object-Oriented Programming"
  ],

  basics: {
    syntax:
      '<?php\necho "Hello, World!";\n?>',
    variables:
      '$name = "John";\n$age = 30;\n$pi = 3.14;',
    comments:
      '// Single-line comment\n# Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types: 'string, integer, float, boolean, array, object, NULL',
    example:
      '$str = "Hello";\n$num = 42;\n$flag = true;\n$arr = array(1, 2, 3);'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, ===, !=, !==, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      '$a = 5; $b = 3;\necho $a + $b;'
  },

  controlFlow: {
    ifElse:
      'if ($age >= 18) {\n  echo "Adult";\n} else {\n  echo "Minor";\n}',
    forLoop:
      'for ($i = 0; $i < 5; $i++) {\n  echo $i;\n}',
    whileLoop:
      '$i = 0;\nwhile ($i < 3) {\n  echo $i;\n  $i++;\n}'
  },

  functions: {
    defFunc:
      'function add($a, $b) {\n  return $a + $b;\n}',
    callFunc:
      'echo add(4, 6);'
  },

  oop: {
    classObj:
      'class Person {\n  public $name;\n  function greet() {\n    echo "Hello " . $this->name;\n  }\n}',
    inheritance:
      'class Animal {\n  function speak() { echo "Sound"; }\n}\n\nclass Dog extends Animal {\n  function speak() { echo "Bark"; }\n}'
  },

  fileHandling: {
    readWrite:
      '$file = fopen("data.txt", "w");\nfwrite($file, "Hello PHP");\nfclose($file);\n\n$file = fopen("data.txt", "r");\necho fread($file, filesize("data.txt"));\nfclose($file);'
  },

  errorHandling: {
    tryCatch:
      'try {\n  throw new Exception("Error occurred");\n} catch (Exception $e) {\n  echo $e->getMessage();\n}'
  },

  advanced: {
    sessions:
      'session_start();\n$_SESSION["user"] = "John";\necho $_SESSION["user"];',
    forms:
      '<form method="post">\n  <input type="text" name="name">\n  <input type="submit">\n</form>\n\n<?php\necho $_POST["name"];\n?>'
  },

  examples: {
    factorial:
      'function fact($n) {\n  if ($n <= 1) return 1;\n  return $n * fact($n - 1);\n}',
    palindrome:
      '$str = "level";\n$rev = strrev($str);\nif ($str == $rev) echo "Palindrome";'
  },

  useCases: [
    "Dynamic websites",
    "CMS platforms (WordPress, Drupal)",
    "Form handling",
    "Backend scripting",
    "E-commerce sites"
  ],

  references: {
    keywords: ['echo', 'function', 'class', 'if', 'else', 'for', 'while'],
    builtins: ['strlen()', 'strrev()', 'array()', 'isset()', 'include'],
    superglobals: ['$_GET', '$_POST', '$_SESSION', '$_COOKIE', '$_SERVER']
  }
};
