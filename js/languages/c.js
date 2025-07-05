// js/languages/c.js
const languageData = {
  name: "C",

  definition:
    "C is a general-purpose, procedural programming language known for its performance, low-level memory access, and portability.",

  history:
    "Developed by Dennis Ritchie at Bell Labs in 1972, C has influenced many modern languages including C++, Java, and Python.",

  features: [
    "Low-level memory manipulation",
    "Efficient and fast",
    "Procedural programming",
    "Portability",
    "Foundation for many operating systems"
  ],

  basics: {
    helloWorld:
      '#include <stdio.h>\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}',
    variables:
      "int a = 5;\nfloat b = 3.14;\nchar c = 'A';",
    comments:
      "// Single-line comment\n/* Multi-line\n   comment */"
  },

  dataTypes: {
    types:
      "int, float, double, char, void",
    example:
      "int age = 21;\ndouble pi = 3.1415;\nchar grade = 'A';"
  },

  operators: {
    arithmetic: "+, -, *, /, %",
    comparison: "==, !=, >, <, >=, <=",
    logical: "&&, ||, !",
    example:
      'int x = 5 + 3;\nif (x > 5 && x < 10) { printf("In range\\n"); }'
  },

  controlFlow: {
    ifElse:
      'int age = 20;\nif (age >= 18) {\n  printf("Adult\\n");\n} else {\n  printf("Minor\\n");\n}',
    forLoop:
      'for (int i = 0; i < 5; i++) {\n  printf("%d\\n", i);\n}',
    whileLoop:
      'int i = 0;\nwhile (i < 3) {\n  printf("%d\\n", i);\n  i++;\n}'
  },

  functions: {
    defFunc:
      'int add(int a, int b) {\n  return a + b;\n}',
    callFunc:
      'int result = add(4, 5);\nprintf("%d", result);'
  },

  fileHandling: {
    readWrite:
      '#include <stdio.h>\nFILE *fp = fopen("file.txt", "w");\nif (fp) {\n  fprintf(fp, "Hello File!\\n");\n  fclose(fp);\n}'
  },

  examples: {
    factorial:
      'int fact(int n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}',
    palindrome:
      'char str[] = "madam";\nint i, len = strlen(str);\nfor (i = 0; i < len/2; i++) {\n  if (str[i] != str[len-1-i]) break;\n}\nif (i == len/2) printf("Palindrome");'
  },

  useCases: [
    "System programming",
    "Embedded systems",
    "Operating system development",
    "Game engines",
    "Compiler design"
  ],

  references: {
    keywords: ["int", "float", "char", "if", "else", "for", "while", "return"],
    stdlib: ["stdio.h", "stdlib.h", "string.h", "math.h"]
  }
};
