# HTML: HyperText Markup Language

HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It describes the structure of a web page and consists of a series of elements that tell the browser how to display the content.

## Basic Structure of an HTML Document

An HTML document has a basic structure that includes the following elements:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Explanation:
- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: The root element of an HTML page.
- `<head>`: Contains meta-information about the HTML document.
- `<title>`: Sets the title of the document, shown in the browser's title bar or tab.
- `<body>`: Contains the content of the HTML document, such as headings, paragraphs, images, links, etc.

## Headings

HTML provides six levels of headings, from `<h1>` to `<h6>`, with `<h1>` being the highest level and `<h6>` the lowest.

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Headings Example</title>
</head>
<body>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <h3>Sub-subheading</h3>
</body>
</html>
```

## Paragraphs

Paragraphs are defined with the `<p>` tag.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Paragraph Example</title>
</head>
<body>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
</body>
</html>
```

## Links

Links are defined with the `<a>` tag. The `href` attribute specifies the URL of the page the link goes to.

```html
<a href="https://www.example.com">This is a link</a>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Links Example</title>
</head>
<body>
    <a href="https://www.example.com">Visit Example.com</a>
</body>
</html>
```

## Images

Images are defined with the `<img>` tag. The `src` attribute specifies the path to the image, and the `alt` attribute provides alternative text for the image.

```html
<img src="image.jpg" alt="Description of image">
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Images Example</title>
</head>
<body>
    <img src="https://www.example.com/image.jpg" alt="Example Image">
</body>
</html>
```

## Lists

HTML supports ordered lists (`<ol>`) and unordered lists (`<ul>`). List items are defined with the `<li>` tag.

### Ordered List:
```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

### Unordered List:
```html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Lists Example</title>
</head>
<body>
    <h2>Ordered List</h2>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>
    <h2>Unordered List</h2>
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
</body>
</html>
```

## Tables

Tables are defined with the `<table>` tag. A table is divided into rows (`<tr>`), and each row is divided into cells (`<td>`). Table headers are defined with the `<th>` tag.

```html
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Tables Example</title>
</head>
<body>
    <table border="1">
        <tr>
            <th>Header 1</th>
            <th>Header 2</th>
        </tr>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
        </tr>
    </table>
</body>
</html>
```

## Forms

Forms are used to collect user input and are defined with the `<form>` tag. Form elements include `<input>`, `<textarea>`, `<button>`, `<select>`, and `<option>`.

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Forms Example</title>
</head>
<body>
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

## Semantic Elements

Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, and `<aside>`.

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Semantic Elements Example</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <section>
        <h2>About Me</h2>
        <p>This is a section about me.</p>
    </section>
    <footer>
        <p>Contact: email@example.com</p>
    </footer>
</body>
</html>
```

## Multimedia

HTML supports multimedia elements like audio and video.

### Audio:
```html
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

### Video:
```html
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Multimedia Example</title>
</head>
<body>
    <h2>Audio</h2>
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <h2>Video</h2>
    <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>
</html>
```

## Conclusion

HTML is the foundation of web development. Understanding its elements and how to use them is crucial for creating well-structured and accessible web pages. This article covered the basic structure of an HTML document, headings, paragraphs, links, images, lists, tables, forms, semantic elements, and multimedia. By mastering these elements, you can create rich and engaging web content.