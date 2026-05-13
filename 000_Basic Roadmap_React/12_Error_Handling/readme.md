# 🔹 Error Handling in React — Deep Explanation

Error handling means:
👉 managing application errors properly so app does NOT crash badly.

Without error handling:

* white screen
* broken UI
* poor user experience

---

# 🔥 Types of Errors in React

| Error Type       | Example           |
| ---------------- | ----------------- |
| Rendering Errors | component crashes |
| API Errors       | failed fetch      |
| Async Errors     | rejected promise  |
| Syntax Errors    | coding mistakes   |
| Runtime Errors   | undefined values  |

---

# 🔥 Main React Error Handling Methods

| Method           | Purpose                |
| ---------------- | ---------------------- |
| Error Boundaries | Catch rendering errors |
| try/catch        | Catch async errors     |

---

# 🔹 1. Error Boundaries ⭐ VERY IMPORTANT

Error Boundaries catch:
👉 errors inside React component tree.

---

# 🧠 Why Needed?

Suppose one component crashes:

Without Error Boundary:
❌ entire app may crash.

With Error Boundary:
✅ show fallback UI.

---

# 🔥 Important

Error Boundaries ONLY work in:

```text id="1"
Class Components
```

---

# 🔥 What Errors They Catch

✅ Rendering errors
✅ Lifecycle errors
✅ Constructor errors

---

# ❌ What They DO NOT Catch

❌ Event handler errors
❌ Async code errors
❌ API errors
❌ setTimeout errors

Very important interview point.

---

# 🔹 Creating Error Boundary

Two lifecycle methods are important:

| Method                   | Purpose   |
| ------------------------ | --------- |
| getDerivedStateFromError | Update UI |
| componentDidCatch        | Log error |

---

# ✅ Full Example

```jsx id="2"
import React from "react";

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {

    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {

    console.log(error);
    console.log(info);
  }

  render() {

    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

# 🔍 Step-by-Step Understanding

---

# `hasError`

Tracks whether error happened.

---

# `getDerivedStateFromError`

Runs when child crashes.

Updates UI state.

---

# `componentDidCatch`

Used for:

* logging
* monitoring services

Example:

* Sentry

---

# `this.props.children`

Renders wrapped components.

---

# 🔹 Usage Example

```jsx id="3"
<ErrorBoundary>
  <Profile />
</ErrorBoundary>
```

---

# 🔥 If Profile crashes

Instead of:
❌ white screen

User sees:
✅ "Something went wrong"

---

# 🔥 Real Example of Crash

```jsx id="4"
function Profile() {

  const user = undefined;

  return <h1>{user.name}</h1>;
}
```

This causes:

```text id="5"
Cannot read property 'name'
```

Error Boundary catches it.

---

# 🔥 Error Boundary Flow

```text id="6"
Child Component Crashes
          ↓
Error Boundary Detects Error
          ↓
Fallback UI Displays
```

---

# 🚨 Common Errors

---

# ❌ Forgetting children

```jsx id="7"
return this.children
```

Wrong.

---

# ❌ Using Error Boundary as functional component

Traditional Error Boundaries require:

```text id="8"
class component
```

---

# 💡 Interview Questions

## Q1: What is Error Boundary?

A class component that catches rendering errors.

---

## Q2: Which lifecycle methods used in Error Boundary?

* getDerivedStateFromError
* componentDidCatch

---

## Q3: What errors Error Boundaries cannot catch?

* async errors
* event handlers
* API errors

Very important interview question.

---

# 🔹 2. try/catch in Async Code ⭐ VERY IMPORTANT

Used for:
👉 handling async errors.

Mostly:

* API calls
* promises
* async/await

---

# ❌ Problem Without try/catch

If API fails:

* app crashes
* unhandled promise rejection

---

# ✅ Example

```jsx id="9"
const fetchUsers = async () => {

  try {

    const res = await fetch(url);

    const data = await res.json();

    console.log(data);

  } catch(error) {

    console.log(error);
  }
};
```

---

# 🔍 Understanding

---

# `try`

Code that may fail.

---

# `catch`

Runs if error happens.

---

# 🔥 Axios Example

```jsx id="10"
try {

  const res = await axios.get(url);

} catch(error) {

  console.log(error);

}
```

---

# 🔥 Better UI Example

```jsx id="11"
const [error, setError] = useState("");

try {

} catch(err) {

  setError("Failed to fetch users");
}
```

---

# Render Error Message

```jsx id="12"
{
  error && <h1>{error}</h1>
}
```

---

# 🔥 Error State Pattern

Professional apps usually manage:

| State   | Purpose             |
| ------- | ------------------- |
| loading | request in progress |
| data    | successful response |
| error   | failure state       |

---

# ✅ Professional Pattern

```jsx id="13"
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [data, setData] = useState([]);
```

---

# 🔥 Full Example

```jsx id="14"
const fetchData = async () => {

  try {

    setLoading(true);

    const res = await fetch(url);

    const data = await res.json();

    setData(data);

  } catch(error) {

    setError("Something went wrong");

  } finally {

    setLoading(false);
  }
};
```

---

# 🔍 Important: finally

Runs ALWAYS:

* success
* error

Useful for:

```text id="15"
loading cleanup
```

---

# 🚨 Common Errors

---

# ❌ Forgetting await

```jsx id="16"
const data = res.json();
```

Returns promise instead of data.

---

# ❌ Only logging errors

Bad UX.

Better:

* show user-friendly message

---

# ❌ No loading state

Users think app frozen.

---

# 🔥 Error Handling in Event Handlers

Error Boundaries do NOT catch:

```jsx id="17"
<button onClick={() => {
  throw new Error();
}}>
```

Need:

```jsx id="18"
try/catch
```

inside handler.

---

# ✅ Example

```jsx id="19"
const handleClick = () => {

  try {

    throw new Error("Failed");

  } catch(error) {

    console.log(error);
  }
};
```

---

# 🔥 Real Problems Developers Face

---

# ❌ Problem 1: White Screen of Death

No Error Boundary.

---

# ❌ Problem 2: Infinite Error Loops

Error UI also crashes.

---

# ❌ Problem 3: Unhandled Promise Rejections

No try/catch.

---

# ❌ Problem 4: Poor Error Messages

Showing technical backend errors directly.

---

# 🔥 Best Practices

---

# ✅ Use Error Boundaries around major sections

Example:

* dashboard
* profile
* routes

---

# ✅ Always handle async errors

---

# ✅ Show user-friendly errors

Bad:

```text id="20"
500 Internal Server Error
```

Good:

```text id="21"
Unable to load data. Please try again.
```

---

# ✅ Log errors to monitoring services

Examples:

* Sentry
* LogRocket

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

---

# Basic

1. What is Error Boundary?
2. Why try/catch used?
3. What errors can Error Boundaries catch?

---

# Intermediate

4. Why Error Boundaries use class components?
5. Difference between rendering errors and async errors?
6. What is componentDidCatch?

---

# Advanced

7. What errors Error Boundaries cannot catch?
8. Why loading/error states important?
9. How professional apps handle errors?

---

# 🔥 FINAL SUMMARY

| Feature           | Purpose                |
| ----------------- | ---------------------- |
| Error Boundary    | Catch rendering errors |
| try/catch         | Catch async errors     |
| componentDidCatch | Log errors             |
| finally           | Cleanup logic          |

---

# 🚀 What You Should Learn Next

Best next topics:

👉 Authentication (JWT)
👉 React Rendering Cycle
👉 Testing (Jest + RTL)
👉 Next.js
👉 Project Architecture

