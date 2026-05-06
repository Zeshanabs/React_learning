# 🔹 React Hooks (Deep Explanation)

Hooks were introduced in React 16.8.

👉 Hooks allow functional components to:

* use state
* use lifecycle features
* reuse logic
* manage side effects

Before hooks:

* Only class components could manage state

Now:

* Functional components can do almost everything

---

# 🔥 Rules of Hooks (VERY IMPORTANT)

These are interview favorites.

## ✅ Rule 1:

Hooks must be called at the top level

❌ Wrong

```jsx id="1"
if (true) {
  useState();
}
```

✅ Correct

```jsx id="2"
const [count, setCount] = useState(0);
```

---

## ✅ Rule 2:

Hooks can only be used:

* inside React components
* inside custom hooks

❌ Wrong

```js id="3"
function test() {
  useState();
}
```

---

# 🔹 1. useState

`useState` is used to store data that changes.

---

## ✅ Syntax

```jsx id="4"
const [state, setState] = useState(initialValue);
```

---

## ✅ Example

```jsx id="5"
import { useState } from "react";

function Counter() {
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

# 🔍 Understanding Line by Line

```jsx id="6"
const [count, setCount] = useState(0);
```

### `count`

Current value

### `setCount`

Function to update value

### `0`

Initial value

---

# 🚨 Common Errors

---

## ❌ Direct Mutation

```jsx id="7"
count = count + 1;
```

Why wrong?
Because React does not re-render.

✅ Correct

```jsx id="8"
setCount(count + 1);
```

---

## ❌ Async State Confusion

```jsx id="9"
setCount(count + 1);
console.log(count);
```

Output may still be old value.

Why?
Because state updates are asynchronous.

---

# ✅ Functional Updates

Best when depending on previous state.

```jsx id="10"
setCount(prev => prev + 1);
```

---

# 💡 Interview Questions

## Q1: Why useState returns array?

Because array destructuring makes naming flexible.

---

## Q2: Does updating state re-render component?

✅ Yes

---

## Q3: Is state update synchronous?

❌ No

---

# 🔹 2. useEffect

`useEffect` handles:

* API calls
* timers
* subscriptions
* side effects

---

# 🧠 What is Side Effect?

Anything outside rendering:

* fetching data
* localStorage
* DOM manipulation

---

# ✅ Syntax

```jsx id="11"
useEffect(() => {
  
}, []);
```

---

# 🔹 Types of useEffect

---

# ✅ 1. Runs on Every Render

```jsx id="12"
useEffect(() => {
  console.log("Rendered");
});
```

⚠ Dangerous sometimes.

---

# ✅ 2. Runs Once (Component Mount)

```jsx id="13"
useEffect(() => {
  console.log("Mounted");
}, []);
```

Empty dependency array = run once

---

# ✅ 3. Runs When Dependency Changes

```jsx id="14"
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

---

# ✅ API Example

```jsx id="15"
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);
```

---

# 🚨 Common Errors

---

## ❌ Infinite Loop

```jsx id="16"
useEffect(() => {
  setCount(count + 1);
});
```

Why?
Effect runs → state updates → rerender → effect again

---

## ❌ Missing Dependency

```jsx id="17"
useEffect(() => {
  console.log(count);
}, []);
```

React may warn.

---

# ✅ Cleanup Function

Used for:

* removing event listeners
* clearing timers

```jsx id="18"
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

---

# 💡 Interview Questions

## Q1: Difference between componentDidMount and useEffect?

`useEffect(..., [])` behaves similarly.

---

## Q2: Why cleanup function important?

Prevents memory leaks.

---

# 🔹 3. useRef

Stores mutable value without re-render.

---

# ✅ Syntax

```jsx id="19"
const ref = useRef();
```

---

# ✅ DOM Access Example

```jsx id="20"
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}
```

---

# 🧠 Important

Changing ref does NOT re-render component.

---

# 🚨 Common Mistakes

## ❌ Access before mount

```js id="21"
inputRef.current.focus();
```

Can fail if element not mounted.

---

# 💡 Interview Questions

## Q: Difference between useRef and useState?

| useRef      | useState        |
| ----------- | --------------- |
| No rerender | Causes rerender |
| Mutable     | Reactive        |

---

# 🔹 4. useContext

Avoids props drilling.

---

# ❌ Props Drilling Problem

```id="22"
App → Parent → Child → GrandChild
```

Passing props through many levels becomes messy.

---

# ✅ Context API Solution

---

# Step 1: Create Context

```jsx id="23"
const UserContext = createContext();
```

---

# Step 2: Provider

```jsx id="24"
<UserContext.Provider value="Zeeshan">
  <App />
</UserContext.Provider>
```

---

# Step 3: Consume

```jsx id="25"
const user = useContext(UserContext);
```

---

# 💡 Interview Questions

## Q: Difference between Redux and Context API?

Context:

* small/global state

Redux:

* complex large apps

---

# 🔹 5. useReducer

Alternative to useState for complex logic.

---

# ✅ Syntax

```jsx id="26"
const [state, dispatch] = useReducer(reducer, initialState);
```

---

# ✅ Example

```jsx id="27"
function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

# 🚨 Common Errors

## ❌ Mutating State

```js id="28"
state.count++;
```

Never mutate.

---

# 💡 Interview Question

## Q: useState vs useReducer?

useReducer better for:

* multiple related states
* complex updates

---

# 🔹 6. useMemo

Optimizes expensive calculations.

---

# ❌ Problem

Heavy calculation runs every render.

---

# ✅ Solution

```jsx id="29"
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

---

# 🧠 Memoization

Stores previous result.

---

# 🚨 Common Mistake

Using useMemo everywhere unnecessarily.

---

# 💡 Interview Question

## Q: Difference between useMemo and useCallback?

* useMemo → memoizes value
* useCallback → memoizes function

---

# 🔹 7. useCallback

Prevents function recreation.

---

# ✅ Example

```jsx id="30"
const memoizedFunction = useCallback(() => {
  console.log("Hello");
}, []);
```

---

# 🧠 Why Important?

Useful when passing functions to child components.

---

# 🔹 8. useLayoutEffect

Runs before browser paints screen.

---

# Difference

| useEffect   | useLayoutEffect |
| ----------- | --------------- |
| After paint | Before paint    |

---

# Used For

* measuring DOM
* animations

---

# 🚨 Warning

Can block rendering if overused.

---

# 🔹 9. useImperativeHandle

Customizes ref exposure.

Usually used with:

* `forwardRef`

---

# Advanced Example

```jsx id="31"
useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current.focus();
  }
}));
```

---

# 🔹 10. useId

Generates unique IDs.

---

# ✅ Example

```jsx id="32"
const id = useId();
```

Useful for:

* accessibility
* form labels

---

# 🔹 11. useTransition

Improves UI responsiveness.

---

# Problem

Heavy rendering freezes UI.

---

# ✅ Solution

```jsx id="33"
const [isPending, startTransition] = useTransition();
```

---

# Example

```jsx id="34"
startTransition(() => {
  setList(newList);
});
```

---

# 🔹 12. useDeferredValue

Delays expensive updates.

---

# Example

```jsx id="35"
const deferredSearch = useDeferredValue(search);
```

Useful for:

* search optimization

---

# 🔹 13. Custom Hooks

Custom hook = reusable logic.

---

# ✅ Example

```jsx id="36"
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return { count, increment };
}
```

---

# Usage

```jsx id="37"
const { count, increment } = useCounter();
```

---

# ✅ Naming Rule

Must start with:

```id="38"
use
```

Example:

* useFetch
* useAuth

---

# 🚨 Common Errors

## ❌ Not starting with use

```js id="39"
function counterHook() {}
```

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

# Basic

1. What are hooks?
2. Why hooks introduced?
3. Rules of hooks?
4. useState vs useRef?
5. useEffect dependency array?

---

# Intermediate

6. useMemo vs useCallback?
7. useReducer vs useState?
8. Context API vs Redux?
9. Cleanup function in useEffect?

---

# Advanced

10. useLayoutEffect vs useEffect?
11. How React prevents unnecessary renders?
12. Custom hooks advantages?
13. Explain memoization.

---

# 🚨 Real Problems Developers Face

---

# Problem 1: Infinite Re-renders

```jsx id="40"
setState()
```

inside render or bad effect.

---

# Problem 2: Stale Closures

Old state inside async functions.

---

# Problem 3: Dependency Array Confusion

Wrong dependencies cause:

* extra renders
* missing updates

---

# Problem 4: Over Optimization

Using:

* useMemo
* useCallback

everywhere unnecessarily.

---

# ✅ Best Practice Summary

| Hook        | Use For            |
| ----------- | ------------------ |
| useState    | Simple state       |
| useEffect   | Side effects       |
| useRef      | DOM/mutable values |
| useContext  | Global small state |
| useReducer  | Complex state      |
| useMemo     | Expensive values   |
| useCallback | Memoized functions |

---

# ✅ What You Should Practice Now

Build:

1. Counter App
2. Todo App
3. Theme Switcher
4. Search Filter
5. API Fetch App
6. Stopwatch using useRef
7. Context API auth system
