import { useState } from 'react';
import './App.css';
import Fruits from './components/Learn/Fruits';
// import Home from './components/Home';
import Navbar from './components/Navbar';
// import VideoPlayer from './components/VideoPlayer';

function App() {
  const handleReduceCount = () => {
    setCount(count - 1);
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <VideoPlayer /> */}
      <Fruits
        quantityCount={count}
        decrement={handleReduceCount}
        increment={handleIncreaseCount}
      />
      <Fruits
        quantityCount={count}
        decrement={handleReduceCount}
        increment={handleIncreaseCount}
      />
    </>
  );
}

export default App;
