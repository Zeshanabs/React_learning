# Redux Toolkit — Complete Beginner Guide

## First Understand The Big Problem

Imagine your React app is a school.

Inside the school:

* One class has students
* One class has teachers
* One class has books
* One class has attendance

Now imagine:

Every room needs information from every other room.

Very quickly things become messy.

This is called **state management problem**.

---

# What is State?

State means:

> Data that can change.

Example:

```js
let counter = 0
```

Counter can change.

So counter is a state.

---

# In React

Example:

```jsx
const [count, setCount] = useState(0)
```

Here:

| Part     | Meaning                  |
| -------- | ------------------------ |
| count    | current value            |
| setCount | function to change value |
| 0        | starting value           |

---

# Problem Without Redux

Imagine:

* Navbar needs user info
* Sidebar needs user info
* Profile page needs user info
* Settings page needs user info

You keep passing data like this:

```jsx
<App user={user} />
```

then

```jsx
<Navbar user={user} />
```

then

```jsx
<Sidebar user={user} />
```

This becomes:

# Prop Drilling

Meaning:

Passing props again and again and again.

Very annoying.

---

# Redux Solves This Problem

Redux creates:

# One Big Central Storage

Like:

🏦 Bank Locker

Every component can take data from there.

No need to pass props everywhere.

---

# Redux Toolkit (RTK)

Redux Toolkit is the **modern easy version of Redux**.

Old Redux was difficult.

Redux Toolkit makes Redux:

* smaller
* easier
* cleaner
* faster

---

# Main Concepts of Redux Toolkit

You must learn these:

1. Store
2. State
3. Action
4. Reducer
5. Slice
6. Dispatch
7. useSelector
8. useDispatch
9. configureStore
10. createSlice
11. Middleware
12. AsyncThunk
13. RTK Query

We will learn ALL.

---

# 1. STORE

Store is:

# The Big Box

It stores all application data.

Example:

```js
store = {
  counter: 0,
  user: "Zeeshan"
}
```

Store keeps all states.

---

# Real Life Example

Imagine refrigerator.

Inside refrigerator:

* milk
* juice
* fruits

Redux store is like refrigerator.

It stores app data.

---

# 2. STATE

State means current data.

Example:

```js
counter: 5
```

Current counter value is state.

---

# 3. ACTION

Action means:

# Message describing what happened

Example:

```js
{
  type: "increment"
}
```

Meaning:

"Increase the counter."

---

# Real Life Example

Teacher says:

> "Increase marks"

This instruction is action.

---

# 4. REDUCER

Reducer is:

# Function that changes state

Example:

```js
(state, action) => {
   state.value += 1
}
```

Reducer checks action and updates state.

---

# Real Life Example

Action:

> Add one apple

Reducer:

Actually adds apple into basket.

---

# 5. SLICE

Slice means:

# Small section of Redux store

Example:

* counterSlice
* userSlice
* productSlice

Each slice manages one feature.

---

# Real Life Example

School has departments:

* Accounts department
* Admission department
* Exam department

Each department handles its own work.

Same with slices.

---

# Redux Flow

VERY IMPORTANT.

Remember this forever:

```text
Component
   ↓
Dispatch Action
   ↓
Reducer Runs
   ↓
State Updates
   ↓
UI Re-renders
```

---

# Project Setup

# Step 1 Install Packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

# Why These Packages?

| Package          | Work                     |
| ---------------- | ------------------------ |
| @reduxjs/toolkit | Redux logic              |
| react-redux      | Connect Redux with React |

---

# First Project — Counter App

We will learn everything from this.

---

# Folder Structure

```text
src/
 ├── app/
 │    └── store.js
 │
 ├── features/
 │    └── counter/
 │          └── counterSlice.js
 │
 ├── App.jsx
 └── main.jsx
```

---

# Step 2 Create Store

## store.js

```js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

---

# Understand Every Single Word

## configureStore

Creates Redux store.

---

## reducer

Object containing all reducers.

---

## counter

Name of state inside store.

---

## counterReducer

Reducer function from slice.

---

# Final Store Looks Like

```js
{
   counter: {
      value: 0
   }
}
```

---

# Step 3 Create Slice

## counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0
}

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions

export default counterSlice.reducer
```

---

# Understand EVERYTHING

---

# initialState

Starting data.

```js
const initialState = {
  value: 0
}
```

Starting counter is 0.

---

# createSlice

Creates:

* reducers
* actions
* slice

Automatically.

Very powerful.

---

# name

```js
name: "counter"
```

Name of slice.

---

# reducers

Contains functions that update state.

---

# increment

```js
increment: (state) => {
   state.value += 1
}
```

Increase value by 1.

---

# Why Direct Mutation Works?

Normally in JavaScript:

```js
state.value += 1
```

mutates data.

Mutation is usually bad.

BUT Redux Toolkit uses:

# Immer Library

Immer safely handles mutation internally.

So RTK lets us write easy code.

---

# action.payload

Payload means:

# Extra data sent with action

Example:

```js
dispatch(incrementByAmount(10))
```

Payload becomes:

```js
10
```

So:

```js
action.payload
```

equals 10.

---

# Step 4 Connect Redux to React

## main.jsx

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import { Provider } from "react-redux"
import { store } from "./app/store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

---

# Provider

Provider gives Redux store to entire app.

Without Provider:

Redux won't work.

---

# store={store}

Passing Redux store into Provider.

---

# Step 5 Use Redux in Component

## App.jsx

```jsx
import { useSelector, useDispatch } from "react-redux"

import {
  increment,
  decrement,
  incrementByAmount
} from "./features/counter/counterSlice"

function App() {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(incrementByAmount(5))}>
        Add 5
      </button>

    </div>
  )
}

export default App
```

---

# useSelector

Gets data from Redux store.

---

# state.counter.value

Remember store:

```js
{
  counter: {
    value: 0
  }
}
```

So:

```js
state.counter.value
```

gets value.

---

# useDispatch

Used to send actions.

---

# dispatch()

Sends action to reducer.

Example:

```js
dispatch(increment())
```

Meaning:

> "Run increment reducer"

---

# Full Redux Flow Here

Button Click:

```js
dispatch(increment())
```

↓

Action sent

↓

Reducer runs

↓

State changes

↓

UI updates

---

# Important Interview Question

# Difference Between Redux and Context API

| Redux Toolkit      | Context API        |
| ------------------ | ------------------ |
| Large apps         | Small apps         |
| Better performance | Can re-render more |
| Middleware support | No middleware      |
| DevTools           | Limited            |
| Async support      | Manual work        |

---

# Problem Practice 1

# Build Counter App

Features:

* Increment
* Decrement
* Reset

Try yourself.

---

# Solution

Add reducer:

```js
reset: (state) => {
   state.value = 0
}
```

---

# Problem Practice 2

# Build Todo App

State:

```js
todos: []
```

Features:

* Add todo
* Delete todo
* Complete todo

---

# Todo Slice Example

```js
const todoSlice = createSlice({
  name: "todo",

  initialState: {
    todos: []
  },

  reducers: {

    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      )
    }
  }
})
```

---

# Understanding filter()

```js
filter()
```

Creates new array.

Used for deleting items.

---

# Example

```js
[1,2,3]
```

Remove 2:

```js
[1,3]
```

---

# Async Operations

Now BIG TOPIC.

What if data comes from API?

Example:

* login API
* products API
* weather API

Redux handles async using:

# createAsyncThunk

---

# createAsyncThunk

Used for:

* API calls
* async work

---

# Example

```js
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async () => {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    )

    return response.json()
  }
)
```

---

# What Happens Here?

---

# "users/fetchUsers"

Action name.

---

# async ()

Async function.

---

# await fetch()

Wait for API data.

---

# response.json()

Convert response into JavaScript.

---

# Extra Reducers

AsyncThunk uses:

# extraReducers

---

# Example

```js
extraReducers: (builder) => {

  builder

    .addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })

    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })

    .addCase(fetchUsers.rejected, (state) => {
      state.loading = false
      state.error = true
    })
}
```

---

# Three States of API

| State     | Meaning |
| --------- | ------- |
| pending   | Loading |
| fulfilled | Success |
| rejected  | Failed  |

---

# Middleware

Middleware means:

# Something sitting in middle

Example:

```text
Action → Middleware → Reducer
```

Middleware can:

* log data
* handle async
* catch errors

---

# Redux DevTools

Amazing debugging tool.

Shows:

* actions
* state changes
* payloads

---

# RTK Query

Advanced Redux Toolkit feature.

Used for:

* API fetching
* caching
* auto loading
* auto refetching

---

# Why RTK Query Is Powerful

Without RTK Query:

You manually write:

* loading
* error
* fetch
* caching

With RTK Query:

Redux handles automatically.

---

# Basic RTK Query Example

```js
import { createApi, fetchBaseQuery }
from "@reduxjs/toolkit/query/react"

export const api = createApi({

  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com"
  }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => "/products"
    })

  })
})

export const {
  useGetProductsQuery
} = api
```

---

# Use In Component

```jsx
const { data, error, isLoading }
= useGetProductsQuery()
```

Done.

Very easy.

---

# Common Redux Toolkit Interview Questions

---

# Q1 Why Redux Toolkit Better Than Redux?

Because:

* less code
* easier
* built-in async
* built-in devtools
* easier mutation

---

# Q2 What is Slice?

Small part of Redux store.

---

# Q3 What is Payload?

Extra data sent with action.

---

# Q4 Difference Between useSelector and useDispatch

| Hook        | Work        |
| ----------- | ----------- |
| useSelector | Read data   |
| useDispatch | Send action |

---

# Q5 What is Reducer?

Function that updates state.

---

# Common Beginner Mistakes

---

# Mistake 1

Wrong selector path.

Wrong:

```js
state.value
```

Correct:

```js
state.counter.value
```

---

# Mistake 2

Forgetting Provider.

Then Redux fails.

---

# Mistake 3

Mutating state manually outside RTK.

---

# Full Mental Model

Remember this forever:

```text
Store = Big storage

Slice = One section

Reducer = Changes data

Action = Message

Dispatch = Sends message

useSelector = Reads data

useDispatch = Sends actions
```

---

# Final Practice Projects

Build these:

1. Counter App
2. Todo App
3. Shopping Cart
4. Notes App
5. Authentication System
6. Weather App
7. Ecommerce App

---

# Best Way To Learn Redux Toolkit

1. Build small apps
2. Make mistakes
3. Debug with DevTools
4. Practice selectors
5. Practice async APIs

---

# Recommended Learning Order

Learn in this exact order:

1. React State
2. Props
3. Context API
4. Redux Toolkit Basics
5. AsyncThunk
6. RTK Query
7. Advanced Patterns

---

# One-Line Summary

Redux Toolkit is:

> A centralized state management system for React apps that makes handling shared data easy, organized, and scalable.
