// js/languages/html_css.js
const languageData = {
  name: "HTML & CSS",

  definition:
    "HTML (HyperText Markup Language) is the standard markup language used to create web pages. CSS (Cascading Style Sheets) is used to control the layout and style of web pages.",

  history:
    "HTML was created by Tim Berners-Lee in 1991. CSS was introduced in 1996 by the W3C to separate content from design in web development.",

  features: [
    "HTML structures content with elements and tags",
    "CSS styles elements (color, size, layout, etc.)",
    "HTML is semantic, readable, and hierarchical",
    "CSS supports classes, IDs, and responsive design",
    "HTML5 and CSS3 offer advanced multimedia and animation capabilities"
  ],

  basics: {
    htmlSkeleton:
      '<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>',

    cssExample:
      'h1 {\n  color: blue;\n  font-size: 24px;\n}\n.container {\n  padding: 20px;\n  background-color: lightgray;\n}'
  },

  elements: {
    commonTags:
      '<h1>Heading</h1>\n<p>Paragraph</p>\n<a href="#">Link</a>\n<img src="image.jpg" alt="Image">',
    formElements:
      '<form>\n  <input type="text" name="name">\n  <input type="submit">\n</form>'
  },

  attributes: {
    global:
      'id, class, style, title, lang',
    event:
      'onclick, onmouseover, onkeyup'
  },

  layout: {
    display:
      'display: block;\ndisplay: inline;\ndisplay: flex;',
    position:
      'position: relative;\nposition: absolute;\nposition: fixed;'
  },

  forms: {
    inputTypes:
      '<input type="text">\n<input type="email">\n<input type="password">\n<input type="submit">',
    attributes:
      'placeholder, required, maxlength, value'
  },

  media: {
    images:
      '<img src="logo.png" alt="Logo">',
    video:
      '<video controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>',
    audio:
      '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>'
  },

  advanced: {
    responsive:
      '@media (max-width: 600px) {\n  body {\n    font-size: 14px;\n  }\n}',
    transitions:
      'button {\n  transition: background-color 0.3s;\n}\nbutton:hover {\n  background-color: red;\n}'
  },

  examples: {
    cardComponent:
      '<div class="card">\n  <h2>Title</h2>\n  <p>Description text</p>\n</div>',

    styledButton:
      '<button class="btn">Click Me</button>\n\n<style>\n.btn {\n  padding: 10px;\n  background: green;\n  color: white;\n}\n</style>'
  },

  useCases: [
    "Web page content and structure",
    "Styling and layout of user interfaces",
    "Responsive websites",
    "Web applications (front-end)",
    "Email templates"
  ],

  references: {
    htmlTags: ['div', 'span', 'img', 'a', 'form', 'input'],
    cssProperties: ['color', 'padding', 'margin', 'font-size', 'background'],
    units: ['px', '%', 'em', 'rem', 'vh', 'vw']
  }
};
