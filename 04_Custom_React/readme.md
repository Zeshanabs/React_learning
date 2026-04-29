

# 📘 React Deep Dive Notes

## Topic: Building Your Own Mini React (Understanding Internals)

---

## 1. 🎯 Purpose of This Lesson

* Understand that **React is not magic**
* Build a **basic custom version of React**
* Learn:

  * How React works internally
  * How elements are created
  * How rendering works
* Goal: **Concept clarity + confidence**

---

## 2. 🧠 Core Idea of React

React mainly does 3 things:

1. Creates elements
2. Converts them into a tree structure
3. Renders them into the DOM

---

## 3. 🏗️ Basic Setup (Custom React)

### HTML Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Custom React</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="customReact.js"></script>
  </body>
</html>
```

---

## 4. 🎯 Step 1: Select Root Element

```js
const container = document.querySelector('#root');
```

---

## 5. 🧱 Step 2: Create a React Element (Manually)

Instead of JSX, we define an object:

```js
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
};
```

### Key Concepts:

* **type** → HTML tag (div, a, h1, etc.)
* **props** → attributes (href, target, etc.)
* **children** → inner content

---

## 6. ⚙️ Step 3: Create Custom Render Function

### Basic Version

```js
function customRender(element, container) {
  const domElement = document.createElement(element.type);

  domElement.innerHTML = element.children;

  domElement.setAttribute('href', element.props.href);
  domElement.setAttribute('target', element.props.target);

  container.appendChild(domElement);
}
```

---

## 7. ⚠️ Problem in Basic Version

* Hardcoded attributes
* Not scalable
* If more props → more manual code

---

## 8. ✅ Improved Version (Dynamic Props Handling)

```js
function customRender(element, container) {
  const domElement = document.createElement(element.type);

  domElement.innerHTML = element.children;

  for (const prop in element.props) {
    domElement.setAttribute(prop, element.props[prop]);
  }

  container.appendChild(domElement);
}
```

### Advantage:

* Handles unlimited attributes dynamically

---

## 9. 🚀 Final Call

```js
customRender(reactElement, container);
```

---

## 10. 🔍 What React Actually Does

React internally:

* Takes JSX
* Converts it into an **object (tree structure)**
* Then renders it

---

## 11. ⚡ JSX Behind the Scenes

### You write:

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

### React converts it to:

```js
React.createElement('h1', {}, 'Hello World');
```

---

## 12. 🧪 React.createElement Syntax

```js
React.createElement(
  type,
  props,
  children
);
```

### Example:

```js
const element = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit Google'
);
```

---

## 13. ⚠️ Why Your Custom Object Failed in Real React

Your custom object:

```js
{
  type: 'a',
  props: {...},
  children: 'text'
}
```

React expects:

* Specific structure
* Internal keys (like key, ref, etc.)

👉 So React didn’t accept your manual object.

---

## 14. 🧩 React Components = Functions

```js
function App() {
  return <h1>Hello</h1>;
}
```

### Important:

* React components are **just functions**
* They return JSX

---

## 15. ⚠️ Important Note

This works:

```js
<App />
```

But this is NOT recommended:

```js
App()
```

Even though it works internally, it breaks:

* React optimizations
* lifecycle handling

---

## 16. 🔁 JSX → Object → DOM Flow

1. JSX written
2. Converted by bundler (like Vite/Babel)
3. Turns into `React.createElement`
4. Creates object tree
5. Rendered to DOM

---

## 17. 🧠 Variables in JSX

```js
const name = "Zeeshan";

return <h1>Hello {name}</h1>;
```

### Output:

```
Hello Zeeshan
```

---

## 18. ⚠️ Important Rule (Interview Point)

Inside JSX:

* Only **expressions allowed**
* Not full JS statements

### ❌ Wrong:

```jsx
{ if (true) { return "Hi"; } }
```

### ✅ Correct:

```jsx
{ condition ? "Hi" : "Bye" }
```

---

## 19. 🧾 What is an Expression?

* A value after evaluation

Examples:

* `name`
* `5 + 5`
* `condition ? "A" : "B"`

---

## 20. ❌ Why Statements Not Allowed?

Because JSX converts into an **object**

Objects cannot contain:

* if
* loops directly

---

## 21. 🔍 React Internals Insight

React internally:

* Builds a tree of elements
* Continuously updates DOM efficiently
* Uses algorithms (like reconciliation)

---

## 22. 📂 Exploring React Source Code

React is open-source:

* You can explore its internal working
* Functions like:

  * `createElement`
  * validation logic
  * rendering system

---

## 23. 🧠 Final Understanding

You learned:

* How React elements are structured
* How rendering works
* How JSX is converted
* How to build a mini React

---

## 24. 🚀 Key Takeaways

* React = JavaScript + abstraction
* JSX is NOT HTML
* React elements = objects
* Rendering = DOM manipulation
* React.createElement is core

---

## 25. 📌 Summary (Short)

* React is just:

  * Object creation
  * Tree structure
  * DOM rendering

* You built:

  * Custom element structure
  * Custom render function

