# 📘 React Notes (Video 5) — Hooks & useState Explained

## 1. Why Do We Need Hooks?

Most beginners ask:

> “Why should I learn hooks when my code already works?”

### Explanation (Cricket Analogy)

* Just like cricket players practice **different shots for different conditions**:

  * In Australia → practice **pull shots** (bouncy pitch)
  * In Pakistan/Bangladesh → practice **straight drives** (low pitch)
* Similarly:

  * You don’t need hooks for simple tasks
  * But in **real-world scenarios**, hooks become necessary

👉 Conclusion:
Hooks are learned not because your current code fails, but because **future scenarios demand them**.

---

## 2. Basic Project: Counter App

### Features:

* Display a counter value
* Two buttons:

  * Increase value
  * Decrease value

### Initial Setup:

* Created using **Vite + React**
* Basic UI:

  * Heading
  * Counter value
  * Two buttons

---

## 3. Problem Without Hooks

### Using Normal JavaScript:

```js
let counter = 5;

function addValue() {
  counter = counter + 1;
}
```

### Issue:

* Variable **updates internally**
* But **UI does NOT update**

👉 This is the key problem:

> ❗ React does NOT automatically update UI when normal variables change

---

## 4. Core Concept: UI Update Problem

React works on:

> “UI should update only when React knows something changed”

### Important Point:

* Updating a variable ≠ Updating UI
* React controls **when UI updates**

---

## 5. Solution: Hooks

React provides special functions called **Hooks**

### Purpose:

* Manage state
* Trigger UI updates automatically

---

## 6. Introduction to `useState`

### Import:

```js
import { useState } from "react";
```

---

### Syntax:

```js
const [counter, setCounter] = useState(5);
```

### Explanation:

* `counter` → current value
* `setCounter` → function to update value
* `5` → default value

---

### Important:

* `useState()` returns **an array of 2 items**

  1. Value
  2. Function to update that value

---

## 7. Updating State Correctly

### ❌ Wrong Way:

```js
counter = counter + 1;
```

### ✅ Correct Way:

```js
setCounter(counter + 1);
```

👉 Why?

* Because React tracks updates through `setCounter`
* This triggers **re-render (UI update)**

---

## 8. How React Works Internally

When you call:

```js
setCounter(newValue);
```

React:

1. Detects state change
2. Re-renders component
3. Updates UI wherever `counter` is used

👉 No need for:

* `getElementById`
* Manual DOM updates

---

## 9. Add & Remove Functions

### Increase:

```js
function addValue() {
  setCounter(counter + 1);
}
```

### Decrease:

```js
function removeValue() {
  setCounter(counter - 1);
}
```

---

## 10. Event Handling in React

```jsx
<button onClick={addValue}>Add Value</button>
<button onClick={removeValue}>Remove Value</button>
```

👉 Important:

* Pass **function reference**, not execution
* Correct:

  ```js
  onClick={addValue}
  ```
* Wrong:

  ```js
  onClick={addValue()}
  ```

---

## 11. Naming Convention (Important)

```js
const [counter, setCounter] = useState(0);
```

* `setCounter` is just a **convention**
* You can name it anything:

```js
const [counter, updateCounter] = useState(0);
```

👉 But recommended:

* Always use: `set + variableName`

---

## 12. Key Learning

### React Principle:

> React updates UI only when state changes through hooks

---

## 13. Assignment (Important for Practice)

### Task 1:

* Counter should NOT go below 0

```js
if (counter > 0) {
  setCounter(counter - 1);
}
```

---

### Task 2:

* Counter should NOT go above 20

```js
if (counter < 20) {
  setCounter(counter + 1);
}
```

---

## 14. Key Takeaways

* Normal variables do NOT update UI
* React needs **state (useState)** to track changes
* Hooks allow:

  * Controlled updates
  * Efficient UI rendering
* `setState` function triggers UI updates

---

## 15. Final Summary

| Concept  | Explanation              |
| -------- | ------------------------ |
| Variable | Updates internally only  |
| State    | Updates UI automatically |
| Hook     | Special React function   |
| useState | Manages component state  |
| setState | Triggers re-render       |
