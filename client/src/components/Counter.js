import {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return(
    <div>
      {count}
      <button onClick={increment}>Add me baby</button>
    </div>
  )

}

export default Counter;