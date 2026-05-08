# 📘 React Notes — Context API + Local Storage Todo App

## 1. Introduction

In this project, a complete **Todo Application** is built using:

* **React Context API** → for global state management
* **localStorage** → for saving data permanently in the browser

This is a real-world React project that demonstrates:

* Global state sharing
* CRUD operations
* Data persistence
* Proper application structure

---

# 📌 Main Concepts Covered

## Topics Included

* Context API
* Global State Management
* Provider Pattern
* Custom Hooks
* localStorage
* JSON.stringify()
* JSON.parse()
* Add Todo
* Update Todo
* Delete Todo
* Toggle Complete
* useEffect()
* Persistent Data

---

# 2. What is Context API?

## Definition

Context API is a React feature used to share data globally between components without prop drilling.

Instead of passing props manually:

```jsx id="4n0ch7"
<App user={user} />
```

We can access data directly from context anywhere in the app.

---

# 3. Why Context API is Used in Todo App

In a Todo application:

* Many components need access to todos
* Example:

  * AddTodo component
  * TodoItem component
  * TodoList component

Passing props repeatedly becomes difficult.

So Context API provides:

* Centralized state
* Cleaner structure
* Easier data sharing

---

# 4. Todo Context Structure

## File:

```id="d9p1it"
contexts/TodoContext.js
```

---

## Creating Context

```js id="evm6xu"
import { createContext, useContext } from 'react'
```

### Purpose:

* `createContext()` → creates global context
* `useContext()` → accesses context data

---

## Creating TodoContext

```js id="vrq0mb"
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false
    }
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})
```

---

## Explanation

### `todos`

Stores all todo items.

Example:

```js id="0v4x9h"
{
  id: 1,
  todo: "Learn React",
  completed: false
}
```

---

## Methods Inside Context

| Method             | Purpose                  |
| ------------------ | ------------------------ |
| `addTodo()`        | Add new todo             |
| `updateTodo()`     | Edit existing todo       |
| `deleteTodo()`     | Remove todo              |
| `toggleComplete()` | Mark complete/incomplete |

---

# 5. Custom Hook for Context

```js id="vtll6s"
export const useTodo = () => useContext(TodoContext)
```

---

## Why Create Custom Hook?

Instead of writing:

```js id="0m5b6r"
useContext(TodoContext)
```

Everywhere, we simply write:

```js id="zdy9z5"
useTodo()
```

### Benefits:

* Cleaner code
* Reusable
* Easier to understand

---

# 6. Exporting Provider

```js id="5h7sqv"
export const TodoProvider = TodoContext.Provider
```

---

## Purpose of Provider

The Provider wraps components and gives access to context data.

Example:

```jsx id="nhmbq5"
<TodoProvider value={{ todos, addTodo }}>
  <App />
</TodoProvider>
```

All child components can now access:

* todos
* methods
* shared state

---

# 7. State Management in App.jsx

## Initial State

```js id="jlwm1l"
const [todos, setTodos] = useState([])
```

### Meaning:

* `todos` → current todo list
* `setTodos` → updates todo list

---

# 8. Add Todo Function

```js id="5jlwmg"
const addTodo = (todo) => {
  setTodos(prev => [
    { ...todo, id: Date.now() },
    ...prev
  ])
}
```

---

## Explanation

### `prev`

Previous state value.

### `Date.now()`

Generates unique ID using current timestamp.

### `...todo`

Copies existing todo properties.

### `...prev`

Keeps old todos.

---

# 9. Update Todo Function

```js id="4dbsaf"
const updateTodo = (id, todo) => {
  setTodos(prev =>
    prev.map(t =>
      t.id === id ? todo : t
    )
  )
}
```

---

## How It Works

* Loops through all todos
* Finds matching ID
* Replaces old todo with updated todo

---

# 10. Delete Todo Function

```js id="jlwmol"
const deleteTodo = (id) => {
  setTodos(prev =>
    prev.filter(t => t.id !== id)
  )
}
```

---

## Explanation

### `filter()`

Creates a new array excluding the selected todo.

---

# 11. Toggle Complete Function

```js id="r5u6iw"
const toggleComplete = (id) => {
  setTodos(prev =>
    prev.map(t =>
      t.id === id
        ? { ...t, completed: !t.completed }
        : t
    )
  )
}
```

---

## Explanation

### `!t.completed`

* true → false
* false → true

Used for toggling completion status.

---

# 12. localStorage in React

## What is localStorage?

Browser storage system that stores data permanently.

Data remains even after:

* Page refresh
* Browser restart

---

# 13. Important localStorage Methods

| Method                   | Purpose       |
| ------------------------ | ------------- |
| `localStorage.setItem()` | Save data     |
| `localStorage.getItem()` | Retrieve data |

---

# 14. Why JSON.stringify() is Needed

## Important Rule

localStorage stores only strings.

Objects/arrays must be converted into strings.

---

## Saving Data

```js id="3bub69"
localStorage.setItem(
  "todos",
  JSON.stringify(todos)
)
```

---

## Explanation

### `JSON.stringify()`

Converts:

```js id="rjlwm7"
[{ id: 1 }]
```

Into:

```id="g0xl2p"
"[{\"id\":1}]"
```

(String format)

---

# 15. Why JSON.parse() is Needed

When reading data:

* localStorage returns string
* Convert string back into object

---

## Loading Data

```js id="hptl5u"
const todos = JSON.parse(
  localStorage.getItem("todos")
)
```

---

# 16. Saving Todos with useEffect

```js id="mr4t5z"
useEffect(() => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  )
}, [todos])
```

---

## Explanation

Whenever `todos` changes:

* useEffect runs
* Updated todos saved to localStorage

---

# 17. Loading Todos on App Start

```js id="owk8o8"
useEffect(() => {
  const todos = JSON.parse(
    localStorage.getItem("todos")
  )

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])
```

---

## Why Empty Dependency Array `[]`?

```js id="o2jns8"
[]
```

Means:

* Run only once
* On component mount

Used for initial loading.

---

# 18. Full Todo App Features

## Features Included

### Add Todo

User can create tasks.

---

### Update Todo

Inline editing supported.

---

### Delete Todo

Remove unwanted tasks.

---

### Toggle Complete

Mark tasks completed with strikethrough.

---

### Persistent Storage

Todos remain after refresh.

---

# 19. Flow of Application

## Step-by-Step Flow

### 1.

User adds todo

⬇

### 2.

State updates using `setTodos`

⬇

### 3.

Context shares updated state globally

⬇

### 4.

useEffect saves todos into localStorage

⬇

### 5.

On refresh:

* localStorage data loads back into state

---

# 20. Important React Concepts Learned

| Concept        | Purpose                 |
| -------------- | ----------------------- |
| Context API    | Global state            |
| Provider       | Share data              |
| useContext     | Access context          |
| Custom Hook    | Cleaner context access  |
| useState       | Store state             |
| useEffect      | Side effects            |
| localStorage   | Persistent data         |
| JSON.stringify | Convert object → string |
| JSON.parse     | Convert string → object |

---

# 21. Key Learning Summary

* Context API removes prop drilling
* localStorage provides persistent storage
* useEffect synchronizes state with storage
* Todo app demonstrates real-world React architecture
* CRUD operations are fundamental React practice
* Context + localStorage is a very common production pattern

---

# 22. Final Understanding

This project teaches how to build scalable React applications using:

* Global state management
* Persistent browser storage
* Clean component structure
* Reusable logic

It is one of the most important beginner-to-intermediate React projects because it combines:

* State management
* Context API
* Hooks
* Data persistence
* Real application logic
