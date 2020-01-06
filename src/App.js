import React from "react"; // react를 불러와서 사용할 수 있습니다.
// import logo from "./logo.svg"; // svg
import "./App.css"; // css 파일도 import할 수 있습니다.

function App() {
  const name = "react";
  return (
    <div
      // style={{
      //   // 작성방식은 carmelCase로 작성해야 합니다.
      //   backgroundColor: "black",
      //   color: "aqua",
      //   fontSize: "48px",
      //   fontWeight: "bold",
      //   padding: 16 // 단위를 생략하면 px로 지정됩니다.
      // }}
      className="react" // class가 아닌 className입니다.
    >
      {name}
      {/* 이 부분은 렌더링되지 않습니다. */}
      <input></input>
      <input />
    </div>
  );
} // component로 리액트는 함수형 컴포넌트를 렌더링합니다.

export default App;
