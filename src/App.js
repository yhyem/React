import { useState } from "react";
import TabName from './useEffect/TabName';
import Profile from './useEffect/Profile'
import InputPractice from "./useRef/InputPractice";
import GetAverage from "./useMemo/getAverage";
import Introduce from "./Introduce";

function App() {
//  // 리렌더링되는 상황을 만들어주기 위한 state를 생성합니다.
//  const [random, setRandom] = useState(0);

//  // LifeCycleTest 컴포넌트의 표시 여부를 결정하는 state를 생성합니다.
//  const [mounted, setMounted] = useState(true);

//  // 기존 state 값에 1을 더해 의도적으로 리렌더링을 발생시킵니다.
//  const reRender = () => setRandom((curr) => curr + 1);

//  const toggle = () => setMounted((curr) => !curr);

 return (
   //태그 하나로 묶여 있어야함!
   <div>
     <Introduce />
     {/* <GetAverage/>
     <button onClick={reRender}>re render</button>
     <button onClick={toggle}>toggle life cycle test</button>
     {mounted && <Profile />} */}
   </div>
 );
}

export default App;

