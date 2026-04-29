1. Introduction
This is the start of a React learning series.
Approach: Learn by doing (project-first approach) instead of only theory.
Goal of this video:
Set up environment
Create first React project
Understand basic structure
Run a simple “Hello World”


2. Required Tools
2.1 Code Editor
Recommended: Visual Studio Code
Alternatives:
Vim
Sublime Text
Any editor works — no restriction.
2.2 Runtime Environment
Install: Node.js
Why?
JavaScript normally runs in browser
Node.js allows running JavaScript outside browser
2.3 Verify Installation

Run in terminal:

node -v


3. React Documentation
Official documentation: React Documentation
Important advice:
Always learn from documentation
Helps you stay updated
Builds strong fundamentals


4. Basic Understanding of React
4.1 What is React?
React is a JavaScript library (not a full framework)
4.2 Related Tools
React (core library)
React DOM → used for web development
React Native → used for mobile apps
4.3 Key Concept
React itself handles logic
React DOM connects React to browser


5. Project Setup Methods
Method 1: Create React App (CRA)
5.1 Command
npx create-react-app my-app
5.2 Issues with CRA
Slow installation
Large bundle size
Includes unnecessary dependencies
5.3 Project Structure Overview

Important file:

package.json
Contains:
Project name & version
Dependencies
Scripts
5.4 Important Scripts
npm run start   # Run development server
npm run build   # Create production build
npm run test    # Run tests
5.5 Running the Project
cd my-app
npm run start
Opens project on:
http://localhost:3000


6. Build Process
Development vs Production
Mode	Description
Development	Code runs for testing
Production	Optimized final version
Build Command:
npm run build
Creates a build/ folder
Contains optimized files (HTML, CSS, JS)
This is what gets deployed


7. Clean React Project
Remove unnecessary files:
logo files
test files
extra CSS
unused scripts
Minimal Example (App.js)
function App() {
  return (
    <h1>Chai aur React</h1>
  );
}

export default App;


8. Method 2: Using Vite (Recommended)
8.1 Why Vite?
Faster than CRA
Lightweight
Modern setup
8.2 Create Project
npm create vite@latest

Steps:

Enter project name
Select framework → React
Select variant → JavaScript
8.3 Install Dependencies
npm install
8.4 Run Project
npm run dev
Opens project on:


http://localhost:5173


9. Vite Project Structure
Important Files:
package.json
main.jsx → Entry point
App.jsx → Main component
Minimal Example (App.jsx)
function App() {
  return (
    <h1>Chai aur React with Vite</h1>
  );
}

export default App;


10. Key Differences: CRA vs Vite
Feature	CRA	Vite
Speed	Slow	Fast
Bundle Size	Large	Small
Setup	Heavy	Lightweight
Recommendation	Not preferred now	Recommended


11. Important Learning Approach
Don’t be afraid to:
Delete code
Modify files
Experiment

Best way to learn:

“Take code → break it → rebuild it”

12. Key Concepts Introduced
Project structure
package.json importance
Scripts (start, build)
Development vs production
React vs React DOM
Bundlers (CRA vs Vite)


13. Why So Much Setup for Simple Output?

Question raised:

“Why use React for just an <h1>?”

Answer:

React is not for simple HTML
It is used for:
Complex UI
Dynamic updates
Component-based architecture


14. What’s Next?

In upcoming lessons:

How React works internally
Execution flow
Component lifecycle
Behind-the-scenes processing


15. Summary
Set up React using CRA and Vite
Learned project structure
Cleaned unnecessary files
Built a simple React app
Understood basic workflow