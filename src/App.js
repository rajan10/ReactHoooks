import React, { useState} from 'react';


export default function App(){
      const [count, setCount] = useState(0);
  
      const buttonList = [  // Array of button objects and each object has a label and action
        { label: "Increment", action: () => setCount(count + 1) },
        { label: "Decrement", action: () => setCount(count - 1) },
        { label: "Reset", action: () => setCount(0) },
        { label: "Double", action: () => setCount(count * 2) },
        { label: "Halve", action: () => setCount(Math.floor(count / 2)) },
      ];

      return (
        <div>
          <h1>Counter: {count}</h1>
          <div>
            {buttonList.map((button, index) => ( // Mapping through the buttonList array to create buttons
              // Each button has a unique key and an onClick event handler
              // The key is the index of the button in the array
              // The onClick event handler calls the action function of the button
              // The action function updates the count state
              // The label is the text displayed on the button
              // syntax  array.map(currentElement, index, array)
              //In array, each element is transformed into a new element and the result is returned as a new array.
              <button key={index} onClick={button.action}>
                {button.label}
              </button>
            ))}
          </div>
        </div>
      );
   

}

