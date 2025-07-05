// js/languages/ruby.js
const languageData = {
  name: "Ruby",

  definition:
    "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",

  history:
    "Ruby was developed by Yukihiro 'Matz' Matsumoto and released in 1995. It is known for powering the Ruby on Rails web framework and for its friendly developer experience.",

  features: [
    "Pure object-oriented language",
    "Dynamic typing",
    "Garbage collection",
    "Readable syntax",
    "Rich standard library"
  ],

  basics: {
    helloWorld:
      'puts "Hello, Ruby!"',
    variables:
      'name = "John"\nage = 30',
    comments:
      '# This is a comment'
  },

  dataTypes: {
    types:
      'String, Integer, Float, Array, Hash, Symbol, Boolean, NilClass',
    example:
      'arr = [1, 2, 3]\nhash = { name: "John", age: 30 }'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'a = 5\nb = 3\nputs a + b'
  },

  controlFlow: {
    ifElse:
      'age = 18\nif age >= 18\n  puts "Adult"\nelse\n  puts "Minor"\nend',
    forLoop:
      'for i in 1..5\n  puts i\nend',
    whileLoop:
      'i = 0\nwhile i < 3\n  puts i\n  i += 1\nend'
  },

  functions: {
    defFunc:
      'def add(a, b)\n  a + b\nend',
    callFunc:
      'puts add(3, 5)'
  },

  oop: {
    classObj:
      'class Person\n  def initialize(name)\n    @name = name\n  end\n\n  def greet\n    puts "Hello #{@name}"\n  end\nend',
    inheritance:
      'class Animal\n  def speak\n    puts "Sound"\n  end\nend\n\nclass Dog < Animal\n  def speak\n    puts "Bark"\n  end\nend'
  },

  advanced: {
    blocks:
      '[1, 2, 3].each { |n| puts n * 2 }',
    lambdas:
      'square = ->(x) { x * x }\nputs square.call(4)'
  },

  examples: {
    factorial:
      'def fact(n)\n  return 1 if n <= 1\n  n * fact(n - 1)\nend',
    palindrome:
      'str = "madam"\nputs "Palindrome" if str == str.reverse'
  },

  useCases: [
    "Web development with Rails",
    "Automation scripts",
    "Prototyping",
    "Command-line tools",
    "Education"
  ],

  references: {
    keywords: ["def", "end", "class", "if", "else", "elsif", "while", "for", "do"],
    builtins: ["puts", "print", "gets", "chomp", "map", "each"],
    libraries: ["Rails", "Sinatra", "RSpec", "Puma"]
  }
};
