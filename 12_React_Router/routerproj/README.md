# React Router Notes (SPA Navigation)

## 1. What is a Single Page Application (SPA)?

* In React, apps are **Single Page Applications (SPAs)**
* This means:

  * The page **does NOT reload completely**
  * Only specific components update
* Result:

  * Faster navigation
  * Better user experience

---

## 2. Why React Router?

React itself does not handle navigation between pages.

To move between different views (pages), we use:
👉 `react-router-dom`

It helps with:

* Navigation between pages
* Dynamic routing
* Nested routes
* Data fetching before rendering

---

## 3. Installation

```bash
npm install react-router-dom
```

---

## 4. Basic Setup (Main Entry File)

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'user/:userId', element: <User /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root'))
  .render(<RouterProvider router={router} />)
```

### Key Points:

* `createBrowserRouter()` → Defines all routes
* `RouterProvider` → Connects router to React app
* `children` → Used for nested routes

---

## 5. Link vs NavLink

### Link

```jsx
<Link to="/about">About</Link>
```

* Used for navigation
* Prevents full page reload

---

### NavLink

```jsx
<NavLink to="/about">About</NavLink>
```

* Same as `Link`
* Adds **active class** when route is active
* Useful for navigation menus

---

### Important Rule

❌ Never use:

```html
<a href="/about">
```

* It reloads the whole page

✅ Always use:

```jsx
<Link /> or <NavLink />
```

---

## 6. Layout and Outlet (Nested Routes)

### Layout Component

```jsx
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
```

### Concept:

* `Layout` is a **common structure**
* `Header` and `Footer` stay constant
* `<Outlet />` is where child routes render

---

## 7. Dynamic Routes

### Route Definition

```jsx
{ path: 'user/:userId', element: <User /> }
```

* `:userId` is a **dynamic parameter**

---

### Accessing Parameters

```jsx
import { useParams } from 'react-router-dom'

function User() {
  const { userId } = useParams()
  return <h1>User ID: {userId}</h1>
}
```

### Example:

URL:

```
/user/123
```

Output:

```
User ID: 123
```

---

## 8. Loader Function (Data Fetching Before Render)

### Route with Loader

```jsx
{
  path: 'github',
  element: <Github />,
  loader: githubInfoLoader
}
```

---

### Loader Function

```jsx
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
```

---

### Using Data in Component

```jsx
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return <div>{data.name}</div>
}
```

### Key Idea:

* Data is fetched **before component loads**
* Prevents loading delays inside UI

---

## 9. Important Concepts Summary

* SPA → No full page reload
* `react-router-dom` → Handles routing
* `createBrowserRouter` → Defines routes
* `RouterProvider` → Connects routing to app
* `Link` → Navigation without reload
* `NavLink` → Navigation + active styling
* `Outlet` → Renders child routes
* `useParams` → Access dynamic URL values
* `loader` → Fetch data before rendering
* `useLoaderData` → Access loader data

---

## 10. Best Practices

* Always use `Link` or `NavLink` instead of `<a>`
* Keep layout separate (Header/Footer reusable)
* Use dynamic routes for IDs and data-based pages
* Use loaders for API calls (cleaner UI)
