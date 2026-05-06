
# 🔹 1. What is React

React is a **JavaScript library** used to build **user interfaces (UI)**, especially for web apps.

👉 Key idea:

* UI is broken into **small reusable components**

### Example

Instead of writing one big HTML page:

* Navbar → Component
* Button → Component
* Card → Component

---

### 💡 Interview Question

**Q:** Why use React instead of plain JavaScript?
**A:**

* Reusable components
* Fast rendering (Virtual DOM)
* Better code organization

---

# 🔹 2. SPA (Single Page Application)

SPA means:
👉 The page does NOT reload when navigating

Instead:

* Only content updates dynamically

### Example

* Facebook, Gmail → SPA

### Problem in traditional websites:

* Full page reload → slow

### React Solution:

* Updates only changed parts

---

### 💡 Interview Question

**Q:** Difference between SPA and MPA?
**A:**

* SPA → one page, dynamic updates
* MPA → multiple pages, reload every time

---

# 🔹 3. Virtual DOM

Virtual DOM is a **copy of the real DOM in memory**

### How it works:

1. React creates Virtual DOM
2. Changes happen in Virtual DOM
3. React compares (Diffing)
4. Updates only changed parts in real DOM

---

### Example

If you change a button text:
❌ Without React → whole DOM updates
✅ With React → only that button updates

---

### 💡 Interview Question

**Q:** Why is Virtual DOM fast?
**A:** Because it minimizes direct DOM manipulation

---

# 🔹 4. Real DOM vs Virtual DOM

| Feature | Real DOM | Virtual DOM |
| ------- | -------- | ----------- |
| Speed   | Slow     | Fast        |
| Update  | Full     | Partial     |
| Memory  | Heavy    | Light       |

---

# 🔹 5. JSX (JavaScript XML)

JSX lets you write **HTML inside JavaScript**

### Example

```jsx
const element = <h1>Hello</h1>;
```

### Behind the scenes:

```js
React.createElement("h1", null, "Hello");
```

---

### ❌ Common Errors

1. Must return ONE parent element

```jsx
return (
  <h1>Hello</h1>
  <p>Hi</p>   // ❌ Error
);
```

✅ Fix:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Hi</p>
  </>
);
```

---

### 💡 Interview Question

**Q:** Can browsers understand JSX?
**A:** No → Babel converts it

---

# 🔹 6. Babel

Babel converts JSX → JavaScript

👉 Without Babel, JSX will not work

---

# 🔹 7. Components

Components are **reusable UI blocks**

---

## 🔸 Functional Component (Modern)

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

---

## 🔸 Class Component (Old)

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

### ❌ Common Mistake

* Forgetting `return`
* Not capitalizing component name

```jsx
function app() {} // ❌ wrong
```

---

### 💡 Interview Question

**Q:** Difference between functional and class component?
**A:**

* Functional → hooks
* Class → lifecycle methods

---

# 🔹 8. Component Architecture

Break UI into small parts

### Example

```
App
 ├── Navbar
 ├── Sidebar
 ├── Card
```

👉 Makes code reusable and clean

---

# 🔹 9. Props (Properties)

Props = data passed from parent → child

---

### Example

```jsx
function Child(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Child name="Zeeshan" />;
}
```

---

### ❌ Common Errors

* Trying to modify props ❌

```js
props.name = "Ali"; // ❌ not allowed
```

---

### 💡 Interview Question

**Q:** Are props mutable?
**A:** No (read-only)

---

# 🔹 10. State

State = **data that changes over time**

---

### Example

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

---

### ❌ Common Errors

```js
count = count + 1; // ❌ wrong
```

✅ Use setter:

```js
setCount(count + 1);
```

---

### 💡 Interview Question

**Q:** Difference between state and props?
**A:**

* Props → passed from parent
* State → managed inside component

---

# 🔹 11. Event Handling

React uses camelCase events

---

### Example

```jsx
<button onClick={() => alert("Clicked")}>
  Click
</button>
```

---

### ❌ Mistakes

```jsx
onClick="handleClick()" // ❌ wrong
```

---

# 🔹 12. Conditional Rendering

Show UI based on condition

---

### Example

```jsx
{isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
```

---

### 💡 Interview Question

**Q:** Ways to do conditional rendering?
**A:**

* if/else
* ternary operator
* && operator

---

# 🔹 13. Lists & Keys

Render multiple items

---

### Example

```jsx
const items = ["A", "B", "C"];

items.map((item, index) => (
  <li key={index}>{item}</li>
));
```

---

### ❌ Common Errors

* Missing key
* Using index as key (bad for dynamic lists)

---

### 💡 Interview Question

**Q:** Why keys are important?
**A:** To identify elements efficiently

---

# 🔹 14. Forms Handling

---

### Example (Controlled Form)

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

### ❌ Common Errors

* Forgetting `onChange`
* Input not updating

---

# 🔹 15. Controlled vs Uncontrolled Components

---

## 🔸 Controlled

React controls input

```jsx
<input value={name} onChange={...} />
```

---

## 🔸 Uncontrolled

DOM controls input

```jsx
<input ref={inputRef} />
```

---

### 💡 Interview Question

**Q:** Which is better?
**A:** Controlled → better for validation & control

---

# 🚨 Most Common Beginner Mistakes

* Forgetting `key` in list
* Updating state directly
* Using wrong event syntax
* Not using fragments
* Misunderstanding props vs state

---

# ✅ What You Should Do Next

Practice these:

1. Counter App
2. Todo App
3. Form Handling
4. List Rendering
