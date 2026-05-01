# React Project Notes — Currency Converter App (Chai aur React)

## Project Overview

In this project, we build a **Currency Converter Application** using React.

This project focuses on:

* Custom Hooks
* Reusable Components
* API Calls
* State Management
* Component Reusability
* Dynamic Currency Conversion
* Performance Optimization
* React Hooks (`useState`, `useEffect`, `useId`)
* Tailwind CSS Styling

---

# Final Project Features

The application includes:

* Currency conversion
* Dynamic API-based exchange rates
* Swap functionality
* Reusable input component
* Controlled inputs
* Dropdown currency selectors
* Optimized rendering using React best practices

---

# Technologies Used

* React
* JavaScript
* Tailwind CSS
* Fetch API
* React Hooks

---

# Project Structure

```bash
src/
│
├── components/
│   ├── InputBox.jsx
│   └── index.js
│
├── hooks/
│   └── useCurrencyInfo.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Important Concepts Covered

---

# 1. Custom Hooks in React

## What is a Custom Hook?

A custom hook is simply a JavaScript function that can use React hooks internally.

Example:

```javascript
function useSomething() {
    // hook logic
}
```

Convention:

* Custom hooks usually start with `use`.

Example:

* `useState`
* `useEffect`
* `useCurrencyInfo`

---

# Creating Custom Hook

## File

```bash
hooks/useCurrencyInfo.js
```

---

## Purpose

This hook fetches currency exchange data from an API.

---

## Full Hook Code

```javascript
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            setData(res[currency]);
        });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
```

---

# Understanding the Hook

## `useState`

```javascript
const [data, setData] = useState({});
```

Stores API response.

---

## `useEffect`

```javascript
useEffect(() => {}, [currency]);
```

Runs whenever currency changes.

---

## Fetch API

```javascript
fetch(url)
```

Used to call external API.

---

## `.then(res => res.json())`

Converts response into JSON.

---

## Dynamic Object Access

```javascript
res[currency]
```

Access object values dynamically.

Example:

```javascript
res["usd"]
res["inr"]
```

---

# API Used

Example API:

```bash
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json
```

---

# Sample API Response

```json
{
  "usd": {
    "inr": 82.34,
    "eur": 0.91,
    "pkr": 278.2
  }
}
```

---

# 2. Reusable Components

## Why Reusable Components?

Instead of creating multiple similar inputs manually, create one reusable component.

---

# InputBox Component

## File

```bash
components/InputBox.jsx
```

---

# Complete Component Code

```javascript
import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            
            <div className="w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange &&
                        onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">
                
                <p className="text-black/40 mb-2 w-full">
                    Currency Type
                </p>

                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) =>
                        onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
```

---

# Important Concepts in Component

---

## Props

Props are used to pass data into components.

Example:

```javascript
function InputBox({ label, amount }) {}
```

---

## Default Values in Props

```javascript
currencyOptions = []
```

Prevents app crash if no data is passed.

---

## Controlled Inputs

```javascript
value={amount}
```

React controls the input value.

---

## Event Handling

```javascript
onChange={(e) => ...}
```

Detects user input changes.

---

## Optional Function Execution

```javascript
onAmountChange && onAmountChange()
```

Checks if function exists before calling it.

---

# 3. `useId()` Hook

## Purpose

Generates unique IDs.

Useful for:

* Accessibility
* Form labels
* Input linking

---

## Example

```javascript
const amountInputId = useId();
```

---

## Binding Label with Input

```javascript
<label htmlFor={amountInputId}>
```

```javascript
<input id={amountInputId} />
```

---

# Important Note

`useId()` should NOT be used for list keys.

Wrong:

```javascript
key={useId()}
```

Correct:

```javascript
key={currency}
```

---

# 4. Component Export Pattern

---

## Normal Export

```javascript
export default InputBox;
```

---

## Better Large Project Approach

Create:

```bash
components/index.js
```

---

## index.js

```javascript
import InputBox from "./InputBox";

export {
    InputBox
};
```

---

## Benefit

Instead of:

```javascript
import InputBox from "./components/InputBox";
```

Use:

```javascript
import { InputBox } from "./components";
```

Cleaner imports.

---

# 5. Main App Logic

## App.jsx

---

# State Variables

```javascript
const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [convertedAmount, setConvertedAmount] = useState(0);
```

---

# Getting Currency Data

```javascript
const currencyInfo = useCurrencyInfo(from);
```

---

# Extract Currency Names

```javascript
const options = Object.keys(currencyInfo);
```

---

# Convert Function

```javascript
const convert = () => {
    setConvertedAmount(
        amount * currencyInfo[to]
    );
};
```

---

# Swap Function

```javascript
const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
};
```

---

# Form Submission

```javascript
<form
    onSubmit={(e) => {
        e.preventDefault();
        convert();
    }}
>
```

---

# Why `preventDefault()`?

Prevents page refresh during form submission.

---

# 6. Rendering Input Components

---

# First Input

```javascript
<InputBox
    label="From"
    amount={amount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setFrom(currency)}
    selectCurrency={from}
    onAmountChange={(amount) => setAmount(amount)}
/>
```

---

# Second Input

```javascript
<InputBox
    label="To"
    amount={convertedAmount}
    currencyOptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    selectCurrency={to}
    amountDisable
/>
```

---

# Swap Button

```javascript
<button onClick={swap}>
    Swap
</button>
```

---

# 7. Tailwind CSS Usage

Tailwind classes were used for styling.

Example:

```javascript
className="w-full h-screen flex flex-wrap justify-center items-center"
```

---

# 8. Debugging Process

## Problem

Amount input was not updating.

---

## Cause

Forgot to pass:

```javascript
onAmountChange
```

---

## Fix

```javascript
onAmountChange={(amount) => setAmount(amount)}
```

---

# 9. Performance Optimization

## Important Rule

When rendering lists using `.map()`, always provide a unique `key`.

---

## Correct

```javascript
<option key={currency}>
```

---

## Why?

Helps React optimize rendering and DOM updates.

---

# 10. Key React Learnings

---

## React Hooks Used

| Hook      | Purpose             |
| --------- | ------------------- |
| useState  | Store state         |
| useEffect | Handle side effects |
| useId     | Generate unique IDs |

---

# Key Concepts Learned

* Custom Hooks
* Controlled Components
* API Fetching
* Dynamic Rendering
* Reusable Components
* State Management
* Event Handling
* Form Handling
* Conditional Function Calls
* Component Export Patterns

---

# Final Notes

This project is important because it introduces:

* Real-world React structure
* API integration
* Reusability
* Clean architecture
* Production-level thinking

---

# Suggested Improvements (Assignment Ideas)

## UI Improvements

* Add image section beside converter
* Create responsive layout
* Improve card design

---

## Functional Improvements

* Set different default currencies
* Add loading spinner
* Add error handling
* Add reverse conversion
* Auto-convert on typing
* Add favorite currencies

---

# Best Practices Learned

* Keep components reusable
* Use hooks for logic separation
* Avoid hardcoded values
* Use dynamic rendering
* Use unique keys in loops
* Organize project folders properly

---

# Final Conclusion

This project is an excellent beginner-to-intermediate React practice project because it teaches:

* Real API handling
* Custom hooks
* Reusable component design
* Controlled forms
* State management
* React optimization techniques

It also builds understanding of how real frontend applications are structured in React.
