// js/languages/r.js
const languageData = {
  name: "R",

  definition:
    "R is a programming language and environment commonly used for statistical computing, data analysis, and graphical representation of data.",

  history:
    "R was developed by Ross Ihaka and Robert Gentleman in the early 1990s as an open-source implementation of the S programming language.",

  features: [
    "Statistical analysis and modeling",
    "Data visualization",
    "Extensive package ecosystem",
    "Vectorized operations",
    "Used in data science, machine learning, and academia"
  ],

  basics: {
    helloWorld:
      'print("Hello, R!")',
    variables:
      'x <- 10\ny <- "Data"\nz <- TRUE',
    comments:
      '# This is a comment'
  },

  dataTypes: {
    types:
      'numeric, integer, character, logical, complex, factor, list, data frame, matrix',
    example:
      'vec <- c(1, 2, 3)\nmat <- matrix(1:6, nrow=2)\ndf <- data.frame(id=1:3, name=c("A", "B", "C"))'
  },

  operators: {
    arithmetic: '+, -, *, /, ^, %%',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&, |, !',
    example:
      'a <- 5\nb <- 2\nprint(a + b)'
  },

  controlFlow: {
    ifElse:
      'if (x > 0) {\n  print("Positive")\n} else {\n  print("Negative")\n}',
    forLoop:
      'for (i in 1:5) {\n  print(i)\n}',
    whileLoop:
      'i <- 1\nwhile (i <= 3) {\n  print(i)\n  i <- i + 1\n}'
  },

  functions: {
    defFunc:
      'add <- function(a, b) {\n  return(a + b)\n}',
    callFunc:
      'add(3, 4)'
  },

  advanced: {
    apply:
      'mat <- matrix(1:9, nrow=3)\napply(mat, 1, sum)',
    sapply:
      'sapply(1:5, function(x) x^2)'
  },

  examples: {
    factorial:
      'fact <- function(n) {\n  if (n <= 1) return(1)\n  return(n * fact(n - 1))\n}',
    palindrome:
      'is_palindrome <- function(s) {\n  s == paste(rev(strsplit(s, "")[[1]]), collapse="")\n}\nprint(is_palindrome("madam"))'
  },

  useCases: [
    "Statistical computing",
    "Data visualization",
    "Bioinformatics",
    "Machine learning",
    "Academic research"
  ],

  references: {
    keywords: ["if", "else", "for", "while", "function", "return"],
    builtins: ["print", "mean", "sum", "length", "data.frame"],
    packages: ["ggplot2", "dplyr", "tidyverse", "caret", "shiny"]
  }
};
