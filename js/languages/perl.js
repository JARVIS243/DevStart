// js/languages/perl.js
const languageData = {
  name: "Perl",

  definition:
    "Perl is a high-level, interpreted programming language known for its strengths in text processing, system administration, and rapid prototyping.",

  history:
    "Perl was created by Larry Wall in 1987 as a Unix scripting language for report processing. It became popular for CGI scripting and text manipulation in the 1990s.",

  features: [
    "Strong text processing capabilities",
    "Regular expression integration",
    "Flexible syntax",
    "Rapid development",
    "Wide range of libraries (CPAN)"
  ],

  basics: {
    helloWorld:
      'print "Hello, Perl!\\n";',
    variables:
      'my $name = "John";\nmy $age = 25;',
    comments:
      '# This is a comment'
  },

  dataTypes: {
    types:
      'Scalar ($), Array (@), Hash (%)',
    example:
      'my @colors = ("red", "green", "blue");\nmy %person = (name => "John", age => 30);'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    string: 'eq, ne, gt, lt',
    logical: '&&, ||, !',
    example:
      'my $a = 10;\nmy $b = 5;\nprint $a + $b;'
  },

  controlFlow: {
    ifElse:
      'my $age = 20;\nif ($age >= 18) {\n  print "Adult\\n";\n} else {\n  print "Minor\\n";\n}',
    forLoop:
      'for (my $i = 0; $i < 5; $i++) {\n  print "$i\\n";\n}',
    whileLoop:
      'my $i = 0;\nwhile ($i < 3) {\n  print "$i\\n";\n  $i++;\n}'
  },

  functions: {
    defFunc:
      'sub add {\n  my ($a, $b) = @_;\n  return $a + $b;\n}',
    callFunc:
      'print add(3, 4);'
  },

  fileHandling: {
    readWrite:
      'open(my $fh, ">", "file.txt") or die $!;\nprint $fh "Hello, file!\\n";\nclose($fh);'
  },

  examples: {
    factorial:
      'sub fact {\n  my ($n) = @_;\n  return 1 if $n <= 1;\n  return $n * fact($n - 1);\n}',
    palindrome:
      'my $str = "madam";\nmy $rev = reverse($str);\nprint "Palindrome\\n" if $str eq $rev;'
  },

  useCases: [
    "System administration",
    "Text parsing",
    "Web CGI scripts",
    "Log processing",
    "Bioinformatics"
  ],

  references: {
    keywords: ["my", "sub", "if", "else", "for", "while", "print"],
    builtins: ["print", "open", "close", "chomp", "split", "reverse"],
    libraries: ["strict", "warnings", "File::Find", "LWP::UserAgent"]
  }
};
