import { useState } from 'react';

export function App() {
  const count = 0;

  return (
    <div>
      <button>-</button>
      <button>+</button>
      <span> : </span>
      <span>{count}</span>
    </div>
  );
}
