import React from 'react';
import ReactDOM from 'react-dom/client';
import Circle from './Circle'; // Import the Circle component

const App = () => {
  return (
    <div>
      <h1>Hello, Circle!</h1>
      {/* Render the Circle component */}
      <Circle bgColor="tomato" borderColor="yellow" />
      <Circle bgColor="blue" text="Hello" />
    </div>
  );
};

export default App;
