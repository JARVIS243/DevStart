// js/languages/go.js
const languageData = {
  name: "Go (Golang)",

  definition:
    "Go is an open-source programming language designed by Google for simplicity, reliability, and efficiency. It is known for its concurrency features and fast compilation.",

  history:
    "Go was developed by Robert Griesemer, Rob Pike, and Ken Thompson at Google in 2007 and released publicly in 2009.",

  features: [
    "Statically typed",
    "Garbage collected",
    "Built-in concurrency (goroutines and channels)",
    "Fast compilation",
    "Standard library with network, web, and system tools"
  ],

  basics: {
    helloWorld:
      'package main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello, Go!")\n}',
    variables:
      'var name string = "John"\nage := 25',
    comments:
      '// Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'int, float64, bool, string, array, slice, map, struct',
    example:
      'arr := [3]int{1, 2, 3}\nslice := []int{4, 5, 6}\nm := map[string]int{"a": 1, "b": 2}'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'a := 10\nb := 5\nfmt.Println(a + b)'
  },

  controlFlow: {
    ifElse:
      'if age >= 18 {\n  fmt.Println("Adult")\n} else {\n  fmt.Println("Minor")\n}',
    forLoop:
      'for i := 0; i < 5; i++ {\n  fmt.Println(i)\n}',
    whileLoop:
      'i := 0\nfor i < 3 {\n  fmt.Println(i)\n  i++\n}'
  },

  functions: {
    defFunc:
      'func add(a int, b int) int {\n  return a + b\n}',
    callFunc:
      'result := add(3, 4)\nfmt.Println(result)'
  },

  concurrency: {
    goroutines:
      'go say("Hello")\ngo say("World")',
    channels:
      'ch := make(chan int)\ngo func() { ch <- 5 }()\nfmt.Println(<-ch)'
  },

  examples: {
    factorial:
      'func fact(n int) int {\n  if n <= 1 {\n    return 1\n  }\n  return n * fact(n - 1)\n}',
    palindrome:
      'func isPalindrome(s string) bool {\n  rev := ""\n  for i := len(s) - 1; i >= 0; i-- {\n    rev += string(s[i])\n  }\n  return s == rev\n}'
  },

  useCases: [
    "Web servers and APIs",
    "DevOps and system programming",
    "Cloud services",
    "Network programming",
    "Command-line tools"
  ],

  references: {
    keywords: ["var", "func", "if", "else", "for", "range", "go", "chan"],
    builtins: ["fmt", "len", "make", "append", "copy", "panic"],
    packages: ["net/http", "os", "io", "strings"]
  }
};
