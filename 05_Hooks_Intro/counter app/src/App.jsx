import { useState } from "react"


function App() {
const [counter, setCounter] = useState(4)

let incrementer = () => {
if (counter<20) {
    setCounter((e)=>
         e+ 2 );
}
}
  return (
    <>  


      <h1>Counter App</h1>
      <button 
      onClick={incrementer}> Incres by 2  </button>
      <br />

      <button 
      onClick={()=>setCounter(counter-2)}>Dec by 2</button>
<p>{counter}</p>
    </>
  );

  }

export default App

// function App() {

//   return ( <>
  
//   <h1>hellow world</h1>
//    <h2>hellow world</h2>
//     <h1>hellow world</h1>
// </>
//   );
// }

// export default App