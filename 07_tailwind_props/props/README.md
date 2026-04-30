## (Props + Tailwind CSS + Component Reusability)

---

## 🔹 1. Introduction

* This video covers:

  * **Props (Properties)** in React
  * **Tailwind CSS setup and usage**
* This marks the **end of React fundamentals**
* After this → focus shifts to **projects + advanced topics**

---

## 🔹 2. Creating a React Project (Quick Recap)

* You can create a React project using:

  * Vite (recommended)
  * CRA (Create React App)

### Basic Steps:

```bash
npm create vite@latest
cd project-name
npm install
npm run dev
```

* Always run the project once to ensure no errors.

---

## 🔹 3. Tailwind CSS Setup in React (Vite)

### Step-by-step:

1. Install dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Initialize Tailwind:

```bash
npx tailwindcss init -p
```

3. Configure `tailwind.config.js`:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

4. Add Tailwind to `index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Run project:

```bash
npm run dev
```

---

## 🔹 4. Using Tailwind CSS

### Example:

```jsx
<h1 className="bg-green-400 text-black p-4 rounded-xl">
  Tailwind Test
</h1>
```

### Key Points:

* Use `className` instead of `class`
* Utility-first approach:

  * `bg-green-400` → background color
  * `p-4` → padding
  * `rounded-xl` → border radius

👉 No need to memorize — practice makes it easy.

---

## 🔹 5. Using Prebuilt Components

* You can copy UI components from libraries (like cards)
* Paste into JSX and fix errors:

  * Close all tags (especially `<img />`)
  * Replace `class` with `className`

---

## 🔹 6. Concept of Components

### Problem:

* Repeating the same UI (like cards)

### Solution:

* Create reusable components

---

## 🔹 7. Creating a Component

### File Structure:

```
src/
 └── components/
      └── Card.jsx
```

### Example:

```jsx
function Card() {
  return (
    <div>
      <h2>Card Title</h2>
    </div>
  );
}

export default Card;
```

### Use in App:

```jsx
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card />
      <Card />
    </>
  );
}
```

---

## 🔹 8. What are Props?

* Props = **data passed from parent to component**
* Makes components **dynamic & reusable**

---

## 🔹 9. Passing Props

```jsx
<Card username="Chai aur Code" />
```

---

## 🔹 10. Receiving Props

```jsx
function Card(props) {
  console.log(props);
}
```

👉 Props are received as an **object**

---

## 🔹 11. Accessing Props

```jsx
props.username
```

---

## 🔹 12. Destructuring Props (Recommended)

```jsx
function Card({ username }) {
  return <h2>{username}</h2>;
}
```

---

## 🔹 13. Passing Different Types in Props

### String:

```jsx
<Card username="Zeeshan" />
```

### Object:

```jsx
const obj = { name: "Zeeshan", age: 21 };

<Card data={obj} />
```

### Array:

```jsx
<Card arr={[1, 2, 3]} />
```

👉 Use `{}` for variables:

```jsx
<Card data={obj} />
```

---

## 🔹 14. Using Props Inside Component

```jsx
function Card({ username }) {
  return <h1>{username}</h1>;
}
```

---

## 🔹 15. Dynamic Multiple Components

```jsx
<Card username="Chai aur Code" />
<Card username="Hitesh" />
```

👉 Each card shows different data

---

## 🔹 16. Passing Multiple Props

```jsx
<Card 
  username="Zeeshan" 
  btnText="Click Me" 
/>
```

---

## 🔹 17. Using Button Text Dynamically

```jsx
function Card({ username, btnText }) {
  return (
    <button>{btnText}</button>
  );
}
```

---

## 🔹 18. Default Props Value

### Problem:

* What if prop is not passed?

### Solution:

```jsx
function Card({ btnText = "Visit Me" }) {
  return <button>{btnText}</button>;
}
```

---

## 🔹 19. Important Concepts Learned

* Tailwind CSS setup & usage
* Creating reusable components
* Props (passing & receiving)
* Destructuring props
* Default values
* Handling dynamic UI

---

## 🔹 20. Key Philosophy of React

❌ Traditional:

* HTML, CSS, JS separate

✅ React:

* Divide based on **functionality (components)**

---

## 🔹 21. Final Conclusion

* React basics are now complete:

  * JSX
  * Components
  * Props
  * Hooks (previous videos)

👉 Next step:

* Build **projects**
* Learn:

  * React Router
  * State Management

---

## 🔹 Quick Revision Summary

* Props = data transfer between components
* Components = reusable UI blocks
* Tailwind = fast styling using classes
* Destructuring = cleaner code
* Default values = safer components
