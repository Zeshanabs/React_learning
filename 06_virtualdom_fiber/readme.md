# 📘 React Notes (Video 6) — Virtual DOM, Reconciliation & Fiber

---

## 1. Nature of This Topic

* This is **NOT a hands-on coding video**
* It is:

  * Conceptual
  * Interview-focused
  * Foundation-level knowledge

👉 Important:

> You may not need it immediately, but it becomes critical later (like preventive medicine).

---

## 2. Why Learn Virtual DOM & Fiber?

Many developers say:

> “I just want to build projects”

But:

* Interviewers still ask:

  * Virtual DOM
  * Reconciliation
  * Fiber
* These topics test your **core understanding of React internals**

---

## 3. What is DOM?

### DOM (Document Object Model)

* The structure of a webpage in the browser
* Represented as a **tree**

---

## 4. Problem with Normal DOM

When something changes:

* Browser:

  * Removes entire DOM
  * Recreates everything (re-render)

👉 Problem:

* Slow
* Inefficient
* Poor performance

---

## 5. What is Virtual DOM?

### Definition:

> A lightweight copy of the real DOM stored in JavaScript

---

### How It Works:

1. React creates a **Virtual DOM tree**
2. On update:

   * Creates a new Virtual DOM
3. Compares:

   * Old Virtual DOM vs New Virtual DOM
4. Updates only changed parts in real DOM

---

### Key Benefit:

* Avoids full page reload
* Improves performance

---

## 6. Important Concept: Selective Updates

Instead of:

* Updating everything ❌

React does:

* Update only changed elements ✅

---

## 7. Problem with Immediate Updates

Scenario:

* Multiple updates happen quickly (e.g., API calls)

Without optimization:

* UI updates multiple times unnecessarily

👉 Example:

* Update 1
* Update 2
* Update 3

Instead of doing 3 updates:

* React should ideally do only the **final update**

---

## 8. Solution: Smarter Rendering

React introduced a smarter system:

* Delay updates
* Batch updates
* Optimize rendering

---

## 9. What is Reconciliation?

### Definition:

> The algorithm React uses to compare two trees and update the UI efficiently

---

### How It Works:

* Compare:

  * Old Virtual DOM
  * New Virtual DOM
* Find differences (Diffing)
* Update only changed nodes

---

### Analogy:

Similar to:

* Git diff (finding changes between files)

---

## 10. What Triggers Updates?

Main trigger:

```js
setState() / useState()
```

👉 When state changes:

* React creates new Virtual DOM
* Runs reconciliation
* Updates UI

---

## 11. Key Principle of React

> Developers describe *what UI should look like*, not *how to update it*

---

## 12. What is React Fiber?

### Definition:

> React Fiber is the **new reconciliation algorithm** used by React

---

### Important:

* Virtual DOM = Concept
* Fiber = Implementation (how React actually updates UI)

---

## 13. Why Fiber Was Introduced

Problems in old system:

* Updates were **synchronous**
* Could block UI
* Poor animations

---

### Fiber Solves:

1. **Incremental Rendering**

   * Break rendering into small tasks

2. **Better Performance**

   * Avoid blocking UI

3. **Smooth Animations**

---

## 14. Key Features of Fiber

### 1. Pause Work

* Stop rendering midway

### 2. Resume Work

* Continue later

### 3. Abort Work

* Cancel unnecessary updates

### 4. Prioritize Updates

* Important updates first

---

### Example:

* Animation → High priority
* Data update → Low priority

---

## 15. Scheduling & Priorities

React can decide:

* Which update to run first
* Which to delay

👉 Similar to:

* Event loop priorities in JavaScript

---

## 16. Batching Updates

Instead of:

* Updating UI multiple times

React:

* Groups updates
* Applies them efficiently

---

## 17. Hydration (Important Concept)

### Definition:

> Process of attaching JavaScript behavior to already rendered HTML

---

### Example:

* Page loads → UI visible
* Buttons not clickable yet
* JS loads → buttons become interactive

👉 This process = Hydration

---

## 18. Keys in Lists (Very Important for Interviews)

### Why Keys?

When rendering lists:

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

---

### Purpose:

* Help React identify elements
* Improve performance

---

### Key Requirements:

* Unique
* Stable
* Predictable

---

### Without Keys:

* React shows warning
* Performance issues occur

---

## 19. Reconciliation vs Rendering

| Concept        | Meaning                   |
| -------------- | ------------------------- |
| Reconciliation | Comparing trees (diffing) |
| Rendering      | Updating UI               |

---

## 20. Important Observations

* React does NOT always update immediately
* It may:

  * Delay updates
  * Batch updates
  * Skip unnecessary updates

---

## 21. Push vs Pull Model

### Push:

* Developer controls updates

### Pull:

* React decides updates

👉 React mainly uses **pull-based optimization**

---

## 22. createRoot() Role

* Initializes React app
* Creates internal structure (Virtual DOM system)
* Starts rendering process

---

## 23. Summary of Flow

1. State changes (`setState`)
2. New Virtual DOM created
3. Reconciliation (diffing)
4. Fiber processes updates
5. Real DOM updates efficiently

---

## 24. Key Takeaways

* Virtual DOM improves performance
* Reconciliation compares trees
* Fiber optimizes rendering
* React controls UI updates
* Developers focus on logic, not DOM manipulation

---

## 25. Final Interview Points

Be ready to answer:

* What is Virtual DOM?
* What is Reconciliation?
* What is Fiber?
* Why keys are important?
* Difference between DOM and Virtual DOM?
* How React updates UI?

---

## 26. One-Line Summary

> React uses Virtual DOM + Fiber (Reconciliation Algorithm) to efficiently update only necessary parts of the UI.

