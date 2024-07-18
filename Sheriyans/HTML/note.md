# HTML Cheat Sheet

## Basic Structure
- `<!DOCTYPE html>` => Defines the document as HTML5
- `<html>` => Root element of an HTML page

## Head Section
- `<head>` => Contains meta-information about the document
  - `<title>` => Sets the title of the page

## Body Section
- `<body>` => Contains the content of the HTML document

## Emmet Suggestions / Auto Complete
- `loremX` => Generates X number of words of dummy text

## Headings
- `<h1>` to `<h6>` => Defines HTML headings, `<h1>` is the largest and `<h6>` is the smallest

## Text Elements
- `<p>` => Paragraph
- `<b>` => Bold text
- `<i>` => Italic text

## Line Breaks and Horizontal Lines
- `<br>` => Inserts a single line break (self-closing tag)
- `<hr>` => Inserts a horizontal line (self-closing tag)

## Lists
- `<ol>` => Ordered List
- `<ul>` => Unordered List
- `<li>` => List Item

## Links
- `<a>` => Anchor (link) tag
  - `href=""` => Specifies the URL of the page the link goes to
  - `target="_blank"` => Opens the link in a new tab or window

## Images
- `<img>` => Embeds an image (self-closing tag)
  - `src=""` => URL of the image
  - `alt=""` => Alternative text for the image

## Forms
- `<form>` => Creates an HTML form
  - `<input type="text">` => Defines a single-line text input field
  - `placeholder=""` => Text that appears inside the input field when it is empty

## Labels and Inputs
- Connect labels and inputs using the `for` attribute in the label and the `id` attribute in the input
  ```html
  <label for="abcd">Name:</label>
  <input type="text" id="abcd">
  ```

## Divs
- `<div>` => A block-level container element used to group together other elements

## IDs and Classes
- `id=""` => Defines a unique identifier for an element
- `class=""` => Defines a class name for an element to apply CSS styles to multiple elements

## HTML5 Semantic Elements
Semantic elements define the structure and parts of a web page, improving readability and accessibility. These elements don't have any intrinsic behavior and are treated like `<div>` elements.

- `<header>` => Represents introductory content or a set of navigational links
- `<aside>` => Represents content that is tangentially related to the content around it
- `<article>` => Represents a self-contained composition in a document, page, application, or site
- `<section>` => Represents a standalone section of content
- `<audio>` => Embeds sound content
- `<video>` => Embeds video content (must use `muted`, `autoplay`, `loop` attributes)
- `<footer>` => Represents the footer of a section or document
- `<nav>` => Represents a section of navigation links
