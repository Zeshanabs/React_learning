import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">

        <button
          onClick={() => setColor("red")}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("black")}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Black
        </button>

      </div>
    </div>
  )
}

export default App