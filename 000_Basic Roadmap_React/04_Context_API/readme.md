# 🔹 Context API (State Management) — Deep Explanation

Context API is React’s built-in solution for **global state management**.

👉 It solves a very common problem:

### ❌ Props Drilling (passing data through many components unnecessarily)

---

# 🧠 When do you need Context API?

Use it when:

* Data is needed in many components
* Example:

  * user login info
  * theme (dark/light)
  * language settings
  * cart data

---

# 🔥 Core Idea

Instead of passing props like this:

```text
App → Parent → Child → GrandChild
```

We do:

```text
Context → Any Component directly
```

---

# 🔹 1. createContext

This creates a **global container** for data.

---

## ✅ Syntax

```jsx
const MyContext = createContext();
```

---

## 🧠 Meaning

👉 You are creating a “box” that will hold shared data.

---

## Example

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

---

# 🔹 2. Provider

Provider is used to **give data to all components inside it**.

---

## 🧠 Think of it like:

👉 A WiFi router

* It sends internet (data)
* All devices (components) can connect

---

## ✅ Syntax

```jsx
<UserContext.Provider value="Zeeshan">
  <App />
</UserContext.Provider>
```

---

## Full Example

```jsx
function App() {
  return (
    <UserContext.Provider value="Zeeshan">
      <Child />
    </UserContext.Provider>
  );
}
```

---

# 🚨 Common Mistake

❌ Forgetting Provider

```jsx
<UserContext value="Zeeshan">  // wrong
```

---

# 🔹 3. Consumer

Older way to access context (not commonly used now).

---

## ✅ Syntax

```jsx
<UserContext.Consumer>
  {(value) => <h1>{value}</h1>}
</UserContext.Consumer>
```

---

## 🧠 How it works

* Uses render function
* Gets context value

---

## ❌ Why not used much?

Because it is:

* messy
* harder to read

---

# 🔹 4. useContext (Modern Way ⭐)

This is the MOST IMPORTANT method.

---

## ✅ Syntax

```jsx
const value = useContext(UserContext);
```

---

## Example

### Step 1: Create Context

```jsx
const UserContext = createContext();
```

---

### Step 2: Provide Value

```jsx
<UserContext.Provider value="Zeeshan">
  <Child />
</UserContext.Provider>
```

---

### Step 3: Use Context

```jsx
import { useContext } from "react";

function Child() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```

---

# 🔍 Flow Understanding

```text
Provider → sends data
useContext → receives data
```

---

# 🔥 Real Example (Full App)

```jsx
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Zeeshan">
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}
```

---

# 🔥 Output

```
Hello Zeeshan
```

---

# 🚨 Common Errors in Context API

---

## ❌ Using useContext outside Provider

```jsx
const user = useContext(UserContext);
```

If Provider is missing:
👉 value will be undefined

---

## ❌ Wrong import

```jsx
import { createContext } from "react"; // correct
```

---

## ❌ Not wrapping components

```jsx
<UserContext.Provider value="Ali">
```

If child is outside:
👉 cannot access data

---

# 🔥 Why Context API is Important

Without Context:

```text
App → Parent → Child → GrandChild → SubChild
```

With Context:

```text
Any Component → directly access data
```

---

# 💡 Interview Questions

---

## Q1: What is Context API?

👉 A system to share global data without props drilling.

---

## Q2: Why Context API is used?

👉 To avoid props drilling and simplify state sharing.

---

## Q3: Difference between Props and Context?

| Props          | Context          |
| -------------- | ---------------- |
| Parent → Child | Global access    |
| Manual passing | Automatic access |

---

## Q4: When NOT to use Context API?

❌ When state changes frequently
❌ When app is large (use Redux Toolkit instead)

---

# 🔥 Real Problems Developers Face

---

## ❌ Problem 1: Overusing Context

Putting everything in context causes:

* performance issues
* unnecessary re-renders

---

## ❌ Problem 2: Not splitting contexts

Bad:

```text
One huge context for everything
```

Good:

```text
UserContext
ThemeContext
CartContext
```

---

## ❌ Problem 3: Uncontrolled re-renders

When context value changes → all consumers re-render.

---

# 🔥 Best Practices

---

## ✅ 1. Keep context small

Don't store everything in one context.

---

## ✅ 2. Split contexts

Example:

* AuthContext
* ThemeContext
* CartContext

---

## ✅ 3. Combine with useReducer for complex apps

Best pattern:

```text
Context + useReducer
```

---

# 🔥 Advanced Pattern (Interview Favorite)

## Context + useReducer

```jsx
const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN":
      return { user: action.payload };
    default:
      return state;
  }
};
```

---

# 🔥 Real Use Cases

* Login user data
* Dark/light mode
* Shopping cart
* Language translation
* App settings

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

---

## Basic

1. What is Context API?
2. Why use Context API?
3. What is Provider?

---

## Intermediate

4. Difference between Context and Props?
5. What is useContext?
6. Why Consumer is rarely used?

---

## Advanced

7. Context API vs Redux?
8. Problems with Context API?
9. How to optimize Context performance?

---

# 🔥 FINAL SUMMARY

| Feature       | Meaning                    |
| ------------- | -------------------------- |
| createContext | Create global container    |
| Provider      | Sends data                 |
| Consumer      | Old way to receive data    |
| useContext    | Modern way to receive data |

---

# 🚀 What to Learn Next

Now you are ready for:

👉 Redux Toolkit (VERY IMPORTANT for jobs)
👉 React Router
👉 useReducer deep dive
👉 React performance optimization
