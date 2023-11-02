import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

useEffect(() => {
  console.log("I run only once")
}, []);
// 한번만 실행
useEffect(() => {
  console.log("I run when 'keyword' changes.")
}, [keyword])
// 하나의 아이템 변화만 적용
useEffect(() => {
  console.log("I run when 'conter' changes.")
}, [counter])
useEffect(() => {
  console.log("I run when 'keyword' or 'conter' changes.")
}, [keyword, counter])
// 둘 중 하나만 변화해도 적용됨
  return (
    <div>
      <input
      value={keyword} 
      onChange = {onChange} 
      type="text" 
      placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click!</button>
    </div>
  );
}

export default App;
