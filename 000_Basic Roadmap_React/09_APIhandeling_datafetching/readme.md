# 🔹 API Handling / Data Fetching in React — Deep Explanation

This is one of the MOST IMPORTANT skills in React development.

Almost every real application needs APIs.

Examples:

* Login system
* Products data
* Weather app
* Social media posts
* Dashboard statistics

---

# 🔥 What is an API?

API = Application Programming Interface

👉 API allows frontend and backend to communicate.

---

# 🧠 Simple Understanding

```text id="1"
Frontend → Request → Backend/API
Frontend ← Response ← Backend/API
```

---

# Example

Frontend asks:

```text id="2"
Give me users data
```

Backend responds:

```json id="3"
[
  {
    "name": "Zeeshan"
  }
]
```

---

# 🔹 1. Fetch API

Built-in JavaScript API for making HTTP requests.

No installation needed.

---

# ✅ Basic GET Request

```jsx id="4"
useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data));

}, []);
```

---

# 🔍 Step-by-Step

---

## `fetch()`

Sends request.

---

## `.then(response => response.json())`

Converts response into JSON.

---

## `.then(data => console.log(data))`

Gets actual data.

---

# 🔥 Better Version with State

```jsx id="5"
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

  }, []);

  return (
    <>
      {
        users.map(user => (
          <h1 key={user.id}>
            {user.name}
          </h1>
        ))
      }
    </>
  );
}
```

---

# 🚨 Common Errors

---

## ❌ Forgetting `.json()`

```js id="6"
console.log(response);
```

You get Response object, not actual data.

---

## ❌ Infinite Loop

```jsx id="7"
useEffect(() => {

  fetchData();

});
```

Without dependency array:

* rerenders forever

---

# 💡 Interview Questions

## Q1: Is fetch built into browser?

✅ Yes

---

## Q2: Does fetch reject on HTTP error?

❌ No (important interview point)

---

# 🔹 2. Axios ⭐ VERY POPULAR

Axios is third-party HTTP library.

---

# ✅ Installation

```bash id="8"
npm install axios
```

---

# ✅ Basic Example

```jsx id="9"
import axios from "axios";

useEffect(() => {

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data));

}, []);
```

---

# 🔥 Axios vs Fetch

| Fetch                  | Axios                 |
| ---------------------- | --------------------- |
| Built-in               | External library      |
| Manual JSON conversion | Automatic             |
| More setup             | Cleaner               |
| No automatic errors    | Better error handling |

---

# 🔥 POST Request Example

```jsx id="10"
axios.post("/users", {
  name: "Zeeshan"
});
```

---

# 🔥 DELETE Request

```jsx id="11"
axios.delete("/users/1");
```

---

# 🔥 PUT Request

```jsx id="12"
axios.put("/users/1", {
  name: "Ali"
});
```

---

# 🚨 Common Errors

---

## ❌ Using wrong endpoint

Results:

```text id="13"
404 error
```

---

## ❌ Forgetting async handling

Can cause undefined data.

---

# 💡 Interview Questions

## Q1: Why Axios preferred?

* automatic JSON parsing
* interceptors
* better error handling

---

## Q2: Difference between fetch and axios?

Very common interview question.

---

# 🔹 3. useEffect for API Calls ⭐ VERY IMPORTANT

Most API calls are placed inside:

```jsx id="14"
useEffect
```

because:
👉 APIs are side effects.

---

# ✅ Example

```jsx id="15"
useEffect(() => {

  fetchUsers();

}, []);
```

---

# 🔥 Why Empty Dependency Array?

```jsx id="16"
[]
```

means:
👉 run only once on component mount.

---

# 🚨 Common Mistakes

---

## ❌ Missing Dependency Array

Causes:

```text id="17"
infinite API calls
```

---

## ❌ Making useEffect async directly

Wrong:

```jsx id="18"
useEffect(async () => {

}, []);
```

---

✅ Correct

```jsx id="19"
useEffect(() => {

  const fetchData = async () => {

  };

  fetchData();

}, []);
```

---

# 💡 Interview Questions

## Q: Why useEffect used for APIs?

Because fetching data is a side effect.

---

# 🔹 4. Async / Await ⭐ VERY IMPORTANT

Modern way to handle promises.

---

# ❌ Promise Chain

```js id="20"
fetch()
.then()
.then()
```

Can become messy.

---

# ✅ Async/Await Version

```jsx id="21"
useEffect(() => {

  const fetchUsers = async () => {

    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await res.json();

    console.log(data);
  };

  fetchUsers();

}, []);
```

---

# 🔍 Understanding

---

## `async`

Makes function asynchronous.

---

## `await`

Waits for promise completion.

---

# 🚨 Common Errors

---

## ❌ Forgetting await

```js id="22"
const data = res.json();
```

Returns promise.

---

## ❌ Using await outside async

Error:

```text id="23"
await is only valid in async function
```

---

# 💡 Interview Questions

## Q1: Why async/await better?

Cleaner and easier to read.

---

# 🔹 5. Error Handling ⭐ VERY IMPORTANT

APIs can fail due to:

* no internet
* server issue
* wrong endpoint

---

# ✅ Try/Catch Example

```jsx id="24"
try {

  const res = await fetch(url);

} catch(error) {

  console.log(error);

}
```

---

# 🔥 Full Example

```jsx id="25"
const fetchUsers = async () => {

  try {

    const res = await fetch(url);

    const data = await res.json();

    setUsers(data);

  } catch(error) {

    console.log("Error:", error);

  }
};
```

---

# 🔥 Axios Error Handling

```jsx id="26"
try {

  const res = await axios.get(url);

} catch(error) {

  console.log(error);

}
```

---

# 🚨 Common Mistakes

---

## ❌ No error handling

App may crash.

---

## ❌ Only console.log errors

Better:

* show user message

---

# 💡 Interview Questions

## Q: Why error handling important?

Improves UX and app stability.

---

# 🔹 6. Loading States ⭐ VERY IMPORTANT

API requests take time.

Without loading state:

* blank screen
* bad UX

---

# ✅ Example

```jsx id="27"
const [loading, setLoading] = useState(true);
```

---

# Full Example

```jsx id="28"
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

  const fetchUsers = async () => {

    const res = await fetch(url);

    const data = await res.json();

    setUsers(data);

    setLoading(false);
  };

  fetchUsers();

}, []);
```

---

# Render

```jsx id="29"
if (loading) {
  return <h1>Loading...</h1>;
}
```

---

# 🔥 Best Practice

Usually apps have:

* loading state
* error state
* success state

---

# 🔹 7. React Query / TanStack Query ⭐ ADVANCED & IMPORTANT

Modern data-fetching library.

Very popular in professional apps.

---

# 🔥 Problem with Traditional Fetching

You manually manage:

* loading
* error
* caching
* refetching

---

# React Query solves all automatically.

---

# ✅ Installation

```bash id="30"
npm install @tanstack/react-query
```

---

# 🔥 Setup

```jsx id="31"
<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

---

# ✅ Example

```jsx id="32"
const { data, isLoading, error } = useQuery({

  queryKey: ["users"],

  queryFn: async () => {

    const res = await fetch(url);

    return res.json();
  }
});
```

---

# 🔥 Benefits

| Feature        | React Query |
| -------------- | ----------- |
| Caching        | ✅           |
| Auto refetch   | ✅           |
| Loading states | ✅           |
| Error handling | ✅           |

---

# 🧠 queryKey

Unique identifier for cache.

---

# 🚨 Common Errors

---

## ❌ Forgetting QueryClientProvider

App fails.

---

# 💡 Interview Questions

## Q1: Why React Query popular?

Because it simplifies server-state management.

---

## Q2: Difference between useEffect fetching and React Query?

React Query provides:

* caching
* automatic refetching
* better performance

---

# 🔹 8. SWR

Another data-fetching library.

Created by:
Vercel

---

# 🔥 Meaning

```text id="33"
Stale While Revalidate
```

---

# ✅ Example

```jsx id="34"
const { data, error } = useSWR(url, fetcher);
```

---

# 🔥 SWR Features

* caching
* revalidation
* fast performance

---

# React Query vs SWR

| React Query   | SWR         |
| ------------- | ----------- |
| More powerful | Simpler     |
| More features | Lightweight |

---

# 🔥 Real Problems Developers Face

---

# ❌ Problem 1: Infinite API Calls

Wrong useEffect dependencies.

---

# ❌ Problem 2: State Updates After Unmount

Can create memory leaks.

---

# ❌ Problem 3: Duplicate API Requests

Multiple components fetching same data.

---

# ❌ Problem 4: Bad Error Handling

Users see blank pages.

---

# 🔥 Best Practices

---

## ✅ Use async/await

Cleaner code.

---

## ✅ Always handle:

* loading
* errors

---

## ✅ Use React Query for large apps

---

## ✅ Keep API logic separate

Example:

```text id="35"
services/api.js
```

---

## ✅ Use environment variables for URLs

```env id="36"
VITE_API_URL
```

---

# 🔥 MOST IMPORTANT INTERVIEW QUESTIONS

---

# Basic

1. Difference between fetch and axios?
2. Why useEffect used for APIs?
3. What is async/await?

---

# Intermediate

4. What are loading states?
5. How error handling works?
6. Why React Query used?

---

# Advanced

7. What is caching?
8. React Query vs SWR?
9. What problems occur in API fetching?

---

# 🔥 FINAL SUMMARY

| Tool        | Purpose                      |
| ----------- | ---------------------------- |
| Fetch API   | Built-in API requests        |
| Axios       | Advanced HTTP library        |
| useEffect   | Side effects                 |
| Async/Await | Cleaner async code           |
| React Query | Server state management      |
| SWR         | Lightweight fetching library |

---

# 🚀 What You Should Learn Next

Best next topics:

👉 Authentication System (JWT)
👉 Performance Optimization
👉 React Rendering Cycle
👉 Next.js
👉 Real Project Architecture
