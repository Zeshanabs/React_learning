# 🔹 Component Communication in React

Component communication means:
👉 How components share data with each other.

This is one of the MOST IMPORTANT React concepts because real applications always require components to interact.

---

# 🔥 Understanding Component Relationships

React components usually communicate in these ways:

```text
Parent
 ├── Child A
 └── Child B
```

Data can move:

* Parent → Child
* Child → Parent
* Child ↔ Child (through parent)

---

# 🔹 1. Parent → Child Communication (Props)

This is the MOST COMMON communication method.

Parent sends data to child using:

```text
props
```

---

# ✅ Real Life Analogy

Imagine:

* Father gives pocket money to son

Father = Parent
Son = Child
Money = Props

---

# ✅ Example

---

## Parent Component

```jsx id="1"
function App() {
  return (
    <User
      name="Zeeshan"
      age={22}
    />
  );
}
```

---

## Child Component

```jsx id="2"
function User(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </>
  );
}
```

---

# 🔍 Step-by-Step Understanding

---

## Parent sends:

```jsx id="3"
<User name="Zeeshan" />
```

---

## Child receives:

```jsx id="4"
props.name
```

---

# ✅ Destructuring Props (Modern Way)

Instead of:

```jsx id="5"
function User(props)
```

Use:

```jsx id="6"
function User({ name, age })
```

---

# Full Example

```jsx id="7"
function User({ name, age }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </>
  );
}
```

---

# 🚨 Common Errors

---

## ❌ Forgetting Props

```jsx id="8"
function User() {
  return <h1>{props.name}</h1>;
}
```

Error:

```text
props is not defined
```

---

## ❌ Wrong Prop Name

Parent:

```jsx id="9"
<User username="Ali" />
```

Child:

```jsx id="10"
props.name
```

Output:

```text
undefined
```

---

# 💡 Interview Questions

## Q1: What are props?

Props are read-only data passed from parent to child.

---

## Q2: Can child modify props?

❌ No

Props are immutable.

---

# 🔹 2. Child → Parent Communication (Callback Functions)

This confuses many beginners.

React data flow is:

```text
Parent → Child
```

So how can child send data upward?

👉 Parent sends a FUNCTION to child.

Child calls that function.

---

# 🧠 Real Life Analogy

Parent gives phone number to child.

Child calls parent whenever needed.

---

# ✅ Example

---

# Parent Component

```jsx id="11"
function App() {

  const getData = (data) => {
    console.log(data);
  };

  return (
    <Child sendData={getData} />
  );
}
```

---

# Child Component

```jsx id="12"
function Child({ sendData }) {

  return (
    <button
      onClick={() => sendData("Hello Parent")}
    >
      Send
    </button>
  );
}
```

---

# 🔍 Flow Understanding

---

## Step 1

Parent creates function:

```jsx id="13"
const getData = (data) => {}
```

---

## Step 2

Parent passes function:

```jsx id="14"
<Child sendData={getData} />
```

---

## Step 3

Child receives function:

```jsx id="15"
function Child({ sendData })
```

---

## Step 4

Child calls function:

```jsx id="16"
sendData("Hello")
```

---

# 🚨 Common Errors

---

## ❌ Calling Function Immediately

```jsx id="17"
onClick={sendData()}
```

This runs instantly.

---

✅ Correct

```jsx id="18"
onClick={() => sendData()}
```

---

# 💡 Interview Questions

## Q1: How does child communicate with parent?

Using callback functions.

---

## Q2: Why callback functions important?

They allow upward data flow.

---

# 🔹 3. Sibling Communication

Sibling components cannot directly talk.

Example:

```text
Parent
 ├── Child A
 └── Child B
```

Child A cannot directly send data to Child B.

---

# ✅ Solution

Use parent as middleman.

---

# Example Flow

```text
Child A → Parent → Child B
```

---

# ✅ Example

---

# Parent

```jsx id="19"
function App() {

  const [message, setMessage] = useState("");

  return (
    <>
      <ChildA setMessage={setMessage} />
      <ChildB message={message} />
    </>
  );
}
```

---

# Child A

```jsx id="20"
function ChildA({ setMessage }) {

  return (
    <button
      onClick={() => setMessage("Hello")}
    >
      Send
    </button>
  );
}
```

---

# Child B

```jsx id="21"
function ChildB({ message }) {

  return <h1>{message}</h1>;
}
```

---

# 🔍 Understanding

Child A updates parent state.

Parent passes updated data to Child B.

---

# 🚨 Common Beginner Mistake

Trying direct sibling communication:

```text
Child A → Child B
```

React does NOT work like this.

---

# 💡 Interview Questions

## Q1: How do siblings communicate?

Through shared parent state.

---

# 🔹 4. Props Drilling

One of the BIGGEST React problems.

---

# 🧠 What is Props Drilling?

Passing props through many levels unnecessarily.

---

# Example

```text
App
 └── Parent
      └── Child
           └── GrandChild
```

Suppose only GrandChild needs data.

Still:

```text
App → Parent → Child → GrandChild
```

Every component passes props.

---

# ❌ Problem

* messy code
* hard maintenance
* unnecessary passing

---

# Example

```jsx id="22"
<App user="Zeeshan" />
```

Then:

```jsx id="23"
<Parent user={user} />
```

Then:

```jsx id="24"
<Child user={user} />
```

Then finally:

```jsx id="25"
<GrandChild user={user} />
```

---

# ✅ Solution

Use:

* Context API
* Redux Toolkit

---

# 💡 Interview Questions

## Q1: What is props drilling?

Passing props through unnecessary intermediate components.

---

## Q2: How to avoid props drilling?

Using Context API or state management libraries.

---

# 🔹 5. Lifting State Up

VERY IMPORTANT concept.

---

# 🧠 What Does It Mean?

Move shared state to nearest common parent.

---

# ❌ Problem Scenario

Two children need same state.

```text
Parent
 ├── Child A
 └── Child B
```

If Child A owns state:

* Child B cannot access it.

---

# ✅ Solution

Move state to parent.

This is called:

```text
Lifting State Up
```

---

# ✅ Example

---

# Parent

```jsx id="26"
function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
}
```

---

# Child A

```jsx id="27"
function ChildA({ count }) {
  return <h1>{count}</h1>;
}
```

---

# Child B

```jsx id="28"
function ChildB({ setCount }) {

  return (
    <button
      onClick={() => setCount(prev => prev + 1)}
    >
      Increase
    </button>
  );
}
```

---

# 🔍 Understanding

Parent owns shared state.

Both children use it.

---

# 💡 Interview Questions

## Q1: What is lifting state up?

Moving state to common parent so multiple children can access it.

---

# 🚨 Real Problems Developers Face

---

# Problem 1: Too Many Props

```jsx id="29"
<Component
  a={a}
  b={b}
  c={c}
  d={d}
/>
```

Hard to manage.

---

# Problem 2: Deep Props Drilling

Huge apps become messy.

---

# Problem 3: State in Wrong Component

Beginners often place state too low.

Result:

* sibling communication issues

---

# 🔥 Important Concept Summary

| Concept               | Direction         |
| --------------------- | ----------------- |
| Props                 | Parent → Child    |
| Callback Functions    | Child → Parent    |
| Sibling Communication | Through Parent    |
| Props Drilling        | Passing deeply    |
| Lifting State Up      | Move state upward |

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

---

# Basic

1. What are props?
2. Props vs state?
3. Can props be modified?

---

# Intermediate

4. How child sends data to parent?
5. How sibling communication works?
6. What is lifting state up?

---

# Advanced

7. What is props drilling?
8. How Context API solves props drilling?
9. When should state be lifted?

---

# ✅ Best Practice Tips

---

## ✅ Keep state close to where used

Do NOT place all state in App unnecessarily.

---

## ✅ Avoid unnecessary props drilling

Use:

* Context API
* Redux

when app grows.

---

## ✅ Use meaningful prop names

Bad:

```jsx id="30"
data
```

Good:

```jsx id="31"
userName
```

---

# ✅ Practice Projects

Build these:

1. Counter App
2. Theme Switcher
3. Todo App
4. Parent-child form
5. Sibling chat system
6. Shared cart counter
