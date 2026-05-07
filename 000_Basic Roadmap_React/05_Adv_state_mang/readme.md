# 🔹 Advanced State Management (Redux, Redux Toolkit & Others)

This is one of the MOST IMPORTANT topics for React jobs and interviews.

We’ll go step by step:

* Why state management is needed
* Redux (classic)
* Redux Toolkit (modern ⭐)
* Other libraries

---

# 🧠 Why State Management Libraries Exist?

In small apps:

* `useState` is enough

But in large apps:

* many components share data
* props drilling becomes messy
* Context becomes limited for complex logic

---

## ❌ Problem in large apps

```text id="q1k8s2"
App → A → B → C → D → E → F
```

State becomes hard to manage.

---

# 🔥 Solution: Global State Management

We use:

* Redux
* Redux Toolkit (modern best practice)
* Zustand, Recoil, Jotai

---

# 🔴 1. Redux (Old but Important)

Redux is a **centralized state container**.

---

## 🧠 Redux Flow (VERY IMPORTANT)

```text id="r8xk2m"
UI → Action → Reducer → Store → UI
```

---

# 🔹 Core Concepts

---

## 🔸 1. Store

👉 Single source of truth (global state container)

```js id="s1"
const store = createStore(reducer);
```

---

## 🧠 Meaning

👉 All app data lives here

---

## 🔸 2. Actions

👉 What you want to do

```js id="s2"
{ type: "INCREMENT" }
```

---

### Example with payload

```js id="s3"
{ type: "ADD_USER", payload: "Zeeshan" }
```

---

## 🔸 3. Reducers

👉 Function that updates state

```js id="s4"
function reducer(state, action) {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    default:
      return state;
  }
}
```

---

## 🔸 4. Dispatch

👉 Sends action to reducer

```js id="s5"
dispatch({ type: "INCREMENT" });
```

---

## 🔸 5. Middleware

👉 Runs between dispatch and reducer

Used for:

* logging
* API calls
* async tasks

Example:

* redux-thunk

---

# 🚨 Redux Problems (Why Toolkit was created)

* Too much boilerplate code
* Complex setup
* Hard learning curve

---

# 🟢 2. Redux Toolkit (Modern ⭐ BEST)

Redux Toolkit (RTK) simplifies Redux.

👉 Official recommended way by Redux team.

---

# 🔹 1. configureStore

Creates store easily

```js id="t1"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {}
});
```

---

# 🔹 2. createSlice ⭐ MOST IMPORTANT

Combines:

* actions
* reducers
* state

---

## Example

```js id="t2"
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

# 🧠 Why this is powerful?

In old Redux:

* actions separate
* reducers separate

In RTK:
👉 everything in one place

---

# 🔹 3. useDispatch & useSelector

---

## useDispatch

Used to trigger actions

```js id="t3"
const dispatch = useDispatch();

dispatch(increment());
```

---

## useSelector

Used to read state

```js id="t4"
const count = useSelector(state => state.counter.count);
```

---

# 🔹 4. createAsyncThunk (VERY IMPORTANT)

Used for API calls

---

## Example

```js id="t5"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://api.com/users");
    return res.json();
  }
);
```

---

## In Slice

```js id="t6"
extraReducers: (builder) => {
  builder.addCase(fetchUsers.fulfilled, (state, action) => {
    state.users = action.payload;
  });
}
```

---

# 🔥 5. RTK Query (Modern API Tool ⭐)

RTK Query handles:

* API calls
* caching
* loading states
* error handling

---

## Benefits

* No need useEffect
* No manual loading state
* Automatic caching

---

# 🧠 Simple Idea

Instead of:

```text id="t7"
useEffect → fetch → setState
```

RTK Query handles everything automatically.

---

# 🔵 3. Other State Libraries

---

# 🔸 Zustand (VERY SIMPLE ⭐)

Lightweight state manager

---

## Example

```js id="z1"
import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 }))
}));
```

---

## Usage

```js id="z2"
const { count, increase } = useStore();
```

---

# 🧠 Why Zustand is popular?

* no boilerplate
* very simple
* fast

---

# 🔸 Recoil (Facebook)

Used for:

* atom-based state

---

## Example

```js id="z3"
const countState = atom({
  key: "countState",
  default: 0
});
```

---

## Usage

```js id="z4"
const [count, setCount] = useRecoilState(countState);
```

---

# 🔸 Jotai (Minimal version of Recoil)

Even simpler than Recoil

---

# 🔥 Comparison Table

| Library       | Complexity | Best For              |
| ------------- | ---------- | --------------------- |
| Redux         | High       | Large enterprise apps |
| Redux Toolkit | Medium     | Professional apps     |
| Zustand       | Low        | Small-medium apps     |
| Recoil        | Medium     | React-heavy apps      |
| Jotai         | Very Low   | Simple global state   |

---

# 🚨 Common Mistakes

---

## ❌ 1. Using Redux for small apps

Overkill

---

## ❌ 2. Not structuring slices properly

Bad:

* everything in one slice

Good:

* counterSlice
* userSlice
* cartSlice

---

## ❌ 3. Mutating state in Redux (old Redux issue)

```js id="x1"
state.count++;
```

👉 Wrong in old Redux (allowed in RTK due to Immer but still should be careful conceptually)

---

## ❌ 4. Confusing dispatch vs reducer

* dispatch → sends action
* reducer → updates state

---

# 💡 Interview Questions

---

## 🔹 Basic

1. What is Redux?
2. What is store?
3. What is action?

---

## 🔹 Intermediate

4. Difference between Redux and Context API?
5. What is middleware?
6. What is reducer?

---

## 🔹 Advanced

7. Why Redux Toolkit is better than Redux?
8. What is RTK Query?
9. What is createAsyncThunk?

---

# 🔥 Real-World Use Cases

* E-commerce cart
* Authentication system
* Dashboard data
* Notifications system
* Global settings

---

# 🔥 FINAL SUMMARY

---

## Redux Flow

```text id="y1"
Action → Reducer → Store → UI
```

---

## Redux Toolkit Flow

```text id="y2"
Slice → Store → useDispatch/useSelector
```

---

## Zustand Flow

```text id="y3"
Direct store access (very simple)
```

---

# 🚀 What You Should Learn Next

Now you are ready for:

👉 React Router (VERY IMPORTANT)
👉 API handling (Axios + React Query)
👉 Authentication system (JWT)
👉 Real project architecture
