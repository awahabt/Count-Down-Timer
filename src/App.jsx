import { useEffect, useState } from "react";
import Counter from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count-Down Timer</h1>
      <Counter initialCount={60}/>
    </div>
  );
}

export default App;
