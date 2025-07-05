// js/languages/sql.js
const languageData = {
  name: "SQL",

  definition:
    "SQL (Structured Query Language) is a standard programming language used to manage and manipulate relational databases.",

  history:
    "SQL was developed in the 1970s at IBM by Donald D. Chamberlin and Raymond F. Boyce. It became the standard language for relational database management systems (RDBMS).",

  features: [
    "Querying data from databases",
    "Inserting, updating, and deleting records",
    "Creating and managing tables",
    "Performing aggregate calculations",
    "Ensuring data integrity using constraints"
  ],

  basics: {
    createTable:
      'CREATE TABLE Students (\n  ID INT PRIMARY KEY,\n  Name VARCHAR(50),\n  Age INT\n);',

    insert:
      "INSERT INTO Students (ID, Name, Age) VALUES (1, 'John', 20);",

    select:
      "SELECT * FROM Students;"
  },

  dataTypes: {
    types: [
      "INT",
      "VARCHAR(n)",
      "TEXT",
      "DATE",
      "FLOAT",
      "BOOLEAN"
    ],

    example:
      'CREATE TABLE Books (\n  ID INT,\n  Title VARCHAR(100),\n  Published DATE\n);'
  },

  clauses: {
    where:
      "SELECT * FROM Students WHERE Age > 18;",

    orderBy:
      "SELECT * FROM Students ORDER BY Name ASC;",

    groupBy:
      "SELECT Age, COUNT(*) FROM Students GROUP BY Age;"
  },

  joins: {
    innerJoin:
      'SELECT s.Name, c.Course\nFROM Students s\nINNER JOIN Courses c\nON s.ID = c.StudentID;',

    leftJoin:
      'SELECT s.Name, c.Course\nFROM Students s\nLEFT JOIN Courses c\nON s.ID = c.StudentID;'
  },

  aggregateFunctions: {
    functions:
      'COUNT(), SUM(), AVG(), MIN(), MAX()',
    example:
      'SELECT AVG(Age) FROM Students;'
  },

  constraints: {
    example:
      'CREATE TABLE Orders (\n  OrderID INT PRIMARY KEY,\n  ProductName VARCHAR(50) NOT NULL,\n  Quantity INT CHECK (Quantity > 0)\n);'
  },

  advanced: {
    subqueries:
      'SELECT Name FROM Students\nWHERE Age > (SELECT AVG(Age) FROM Students);',

    views:
      'CREATE VIEW TeenStudents AS\nSELECT * FROM Students WHERE Age BETWEEN 13 AND 19;'
  },

  examples: {
    delete:
      "DELETE FROM Students WHERE Age < 10;",

    update:
      "UPDATE Students SET Age = 21 WHERE Name = 'John';"
  },

  useCases: [
    "Database querying and reporting",
    "Application backends (data persistence)",
    "Business intelligence & analytics",
    "Data warehousing",
    "CRM and ERP systems"
  ],

  references: {
    keywords: [
      "SELECT", "FROM", "WHERE", "INSERT", "UPDATE", "DELETE",
      "CREATE", "DROP", "ALTER", "JOIN", "GROUP BY", "ORDER BY"
    ],
    functions: [
      "NOW()", "COUNT()", "SUM()", "AVG()", "MIN()", "MAX()"
    ],
    operators: [
      "=", ">", "<", ">=", "<=", "<>", "AND", "OR", "NOT", "IN", "BETWEEN", "LIKE"
    ]
  }
};
