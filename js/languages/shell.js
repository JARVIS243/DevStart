// js/languages/shell.js
const languageData = {
  name: "Shell",

  definition:
    "Shell scripting is a way to automate command-line tasks using a sequence of commands written in a script file, typically for Unix/Linux systems. Bash is the most popular shell.",

  history:
    "Shell scripting originated with the Bourne Shell (sh) in the 1970s. Later shells like Bash (Bourne Again SHell) added more features and became standard on most Linux systems.",

  features: [
    "Command automation",
    "File and process management",
    "Simple and quick scripting",
    "System administration tasks",
    "Text processing with tools like grep, sed, and awk"
  ],

  basics: {
    intro: "Shell scripts are interpreted by the shell and often start with a shebang (#!/bin/bash).",
    helloWorld: 'echo "Hello, World!"',
    comments: '# This is a comment',
    variables:
      'name="John"\necho "Hello, $name"\nage=25\necho "Age: $age"'
  },

  dataTypes: {
    types:
      "All variables are strings by default. Arrays and integers are handled specially.",
    example:
      'num=10\ntext="Shell"\ndeclare -a arr=("one" "two" "three")\necho ${arr[1]}'
  },

  operators: {
    arithmetic: '+, -, *, /, %, ** (with expr or $(( )) syntax)',
    comparison: '-eq, -ne, -lt, -le, -gt, -ge',
    logical: '&&, ||, !',
    example:
      'a=5\nb=3\nif [ $a -gt $b ]; then\n  echo "a is greater"\nfi'
  },

  controlFlow: {
    ifElse:
      'read -p "Enter number: " num\nif [ $num -gt 0 ]; then\n  echo "Positive"\nelse\n  echo "Negative"\nfi',
    forLoop:
      'for i in 1 2 3; do\n  echo $i\ndone',
    whileLoop:
      'count=1\nwhile [ $count -le 5 ]; do\n  echo $count\n  ((count++))\ndone'
  },

  functions: {
    defFunc:
      'greet() {\n  echo "Hello, $1"\n}',
    callFunc:
      'greet "World"'
  },

  fileHandling: {
    readWrite:
      'echo "Sample text" > file.txt\ncat file.txt\n\n# Append:\necho "Another line" >> file.txt'
  },

  examples: {
    backup:
      'tar -czf backup.tar.gz /home/user/Documents',
    systemUpdate:
      'sudo apt update && sudo apt upgrade -y',
    fileLoop:
      'for file in *.txt; do\n  echo "Processing $file"\ndone'
  },

  useCases: [
    "System administration",
    "Automating backups",
    "Server management",
    "Scheduled jobs (cron)",
    "DevOps pipelines"
  ],

  references: {
    keywords: [
      "echo",
      "if",
      "then",
      "fi",
      "for",
      "while",
      "function",
      "case",
      "esac"
    ],
    builtinCommands: [
      "cd",
      "ls",
      "pwd",
      "touch",
      "grep",
      "awk",
      "sed",
      "find",
      "cat"
    ],
    interpreters: ["bash", "sh", "zsh", "dash"]
  }
};

