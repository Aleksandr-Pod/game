import { useEffect, useCallback, useState } from "react";
import {SpriteObj} from "./sprite/sprite";
import {position} from "./position";
import './App.css';

function App() {
  const [left, setLeft] = useState(position.left);
  const [top, setTop] = useState(position.top);
  const [fire, setFire] = useState(false);

  const handleKeydown = useCallback((e) => {
    // console.log(e.code)
    switch (e.code) {
      case "ArrowLeft":
        setLeft(prev => prev - 10);
        position.left -=10;
        break;
      case "ArrowRight":
        setLeft(prev => prev + 10);
        position.left +=10;
        break;
      case "ArrowUp":
        setTop(prev => prev - 10); 
        position.top -=10;
        break;
      case "ArrowDown":
        setTop(prev => prev + 10);
        position.top +=10;
        break;
      case "Space":
        console.log("fire");
        setFire(true);
        setTimeout(() => setFire(false), 100);
        break;  
      default:
        break;
    }
  },[])
  
useEffect(() => {
  document.addEventListener('keydown', handleKeydown);
  return () => document.removeEventListener('keydown', handleKeydown);
}, [handleKeydown]);


  return (
    <div className='field' onKeyDown={handleKeydown}>
      <SpriteObj top={top} left={left} fire={fire}/>
    </div>
  );
}

export default App;
