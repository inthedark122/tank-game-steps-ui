import { useState } from 'react';

export function App() {
 const [count, setCount] = useState(0);
 const handleUpClick = (event) => {
   setCount((prevCount) => prevCount - 1)
 }
 const handleDownClick = () => {
   setCount((prevCount) => prevCount + 1)
 }

 return (
   <div>
     <button onClick={handleUpClick}>-</button>
     <button onClick={handleDownClick}>+</button>
     <span> : </span>
     <span>{count}</span>
   </div>
 );
}
