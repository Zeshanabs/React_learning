# 🔹 Lifecycle Methods in React (Class Components) — Deep Explanation

Before Hooks existed:
👉 React developers mainly used:

```text id="1"
Class Components
```

To handle:

* API calls
* timers
* subscriptions
* side effects

React introduced:

```text id="2"
Lifecycle Methods
```

---

# 🔥 What is Component Lifecycle?

Lifecycle means:
👉 different stages a component goes through.

Just like human life:

```text id="3"
Birth → Update → Death
```

React components also have phases.

---

# 🔥 Main Lifecycle Phases

| Phase      | Meaning           |
| ---------- | ----------------- |
| Mounting   | Component created |
| Updating   | Component changes |
| Unmounting | Component removed |

---

# 🔥 Lifecycle Flow

```text id="4"
Mounting
   ↓
Updating
   ↓
Unmounting
```

---

# 🔹 1. Mounting Phase

Mounting means:
👉 component is created and inserted into DOM.

---

# 🔥 Important Mounting Method

```text id="5"
componentDidMount()
```

---

# 🧠 Meaning

Runs:
✅ after component appears on screen

---

# ✅ Example

```jsx id="6"
class App extends React.Component {

  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

---

# 🔥 When Used?

Very common for:

* API calls
* timers
* subscriptions

---

# ✅ API Call Example

```jsx id="7"
componentDidMount() {

  fetch("https://api.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
}
```

---

# 🔥 Hook Equivalent

```jsx id="8"
useEffect(() => {

}, []);
```

---

# 🚨 Common Errors

---

## ❌ Calling setState infinitely

```jsx id="9"
componentDidMount() {
  this.setState({ count: 1 });
}
```

Can cause unnecessary rerenders.

---

# 💡 Interview Questions

## Q1: When does componentDidMount run?

After component mounts to DOM.

---

## Q2: Why API calls usually inside componentDidMount?

Because component is ready.

---

# 🔹 2. Updating Phase

Occurs when:

* props change
* state changes

---

# 🔥 Important Updating Method

```text id="10"
componentDidUpdate()
```

---

# 🧠 Meaning

Runs:
👉 after component updates.

---

# ✅ Example

```jsx id="11"
class App extends React.Component {

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

---

# 🔥 Trigger Causes

* state update
* props update

---

# ✅ Example with State

```jsx id="12"
class App extends React.Component {

  state = {
    count: 0
  };

  componentDidUpdate() {
    console.log("Count Updated");
  }

  render() {
    return (
      <button
        onClick={() =>
          this.setState({
            count: this.state.count + 1
          })
        }
      >
        Increase
      </button>
    );
  }
}
```

---

# 🚨 VERY IMPORTANT

---

## ❌ Infinite Loops

Wrong:

```jsx id="13"
componentDidUpdate() {
  this.setState({ value: 1 });
}
```

Why?

```text id="14"
Update → setState → Update → setState
```

Infinite loop.

---

# ✅ Correct Way

Use condition:

```jsx id="15"
componentDidUpdate(prevProps, prevState) {

  if (prevState.count !== this.state.count) {
    console.log("Changed");
  }
}
```

---

# 🔥 Hook Equivalent

```jsx id="16"
useEffect(() => {

}, [dependency]);
```

---

# 💡 Interview Questions

## Q1: When componentDidUpdate runs?

After every update.

---

## Q2: Why prevProps/prevState important?

To compare old and new values.

---

# 🔹 3. Unmounting Phase

Unmounting means:
👉 component removed from DOM.

---

# 🔥 Important Method

```text id="17"
componentWillUnmount()
```

---

# 🧠 Meaning

Runs:
👉 just before component disappears.

---

# ✅ Example

```jsx id="18"
class App extends React.Component {

  componentWillUnmount() {
    console.log("Component Removed");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

---

# 🔥 Common Use Cases

* clear timers
* remove event listeners
* cleanup subscriptions

---

# ✅ Timer Example

```jsx id="19"
class App extends React.Component {

  componentDidMount() {

    this.timer = setInterval(() => {
      console.log("Running");
    }, 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

---

# 🧠 Why Cleanup Important?

Without cleanup:
❌ memory leaks happen.

---

# 🔥 Hook Equivalent

```jsx id="20"
useEffect(() => {

  return () => {

  };

}, []);
```

---

# 🔥 Lifecycle Visualization

```text id="21"
Component Created
       ↓
componentDidMount
       ↓
Component Updates
       ↓
componentDidUpdate
       ↓
Component Removed
       ↓
componentWillUnmount
```

---

# 🔥 Class Component Structure

```jsx id="22"
class App extends React.Component {

  state = {
    count: 0
  };

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {

    return <h1>Hello</h1>;
  }
}
```

---

# 🔥 Class Components vs Functional Components

| Class Components  | Functional Components |
| ----------------- | --------------------- |
| Lifecycle methods | Hooks                 |
| this keyword      | simpler syntax        |
| More boilerplate  | cleaner               |

---

# 🔥 Mapping Lifecycle Methods to Hooks

| Lifecycle Method     | Hook Equivalent   |
| -------------------- | ----------------- |
| componentDidMount    | useEffect([], []) |
| componentDidUpdate   | useEffect([dep])  |
| componentWillUnmount | cleanup function  |

---

# 🔥 Real Problems Developers Face

---

# ❌ Problem 1: Infinite Update Loops

Very common in:

```text id="23"
componentDidUpdate
```

---

# ❌ Problem 2: Memory Leaks

Forgetting:

* clearInterval
* removeEventListener

---

# ❌ Problem 3: Misunderstanding Lifecycle Order

Confusion about:

* when component updates
* when cleanup runs

---

# ❌ Problem 4: Excessive API Calls

Wrong lifecycle usage.

---

# 🔥 Best Practices

---

## ✅ Use componentDidMount for APIs

---

## ✅ Cleanup resources in componentWillUnmount

---

## ✅ Use conditions in componentDidUpdate

Prevent loops.

---

## ✅ Prefer Functional Components in modern React

Hooks replaced most lifecycle usage.

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

---

# Basic

1. What is component lifecycle?
2. What are lifecycle phases?
3. What is mounting?

---

# Intermediate

4. Difference between mounting and updating?
5. Why componentDidMount used for APIs?
6. Why cleanup important?

---

# Advanced

7. How infinite loops happen in componentDidUpdate?
8. Lifecycle methods vs hooks?
9. How memory leaks occur?

---

# 🔥 FINAL SUMMARY

| Method               | Purpose                |
| -------------------- | ---------------------- |
| componentDidMount    | Runs after mount       |
| componentDidUpdate   | Runs after update      |
| componentWillUnmount | Cleanup before removal |

---

# 🚀 What You Should Learn Next

Best next topics:

👉 Error Boundaries
👉 Authentication (JWT)
👉 React Rendering Cycle
👉 Testing (Jest + RTL)
👉 Next.js

