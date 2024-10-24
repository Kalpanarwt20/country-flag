/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  const [mode, setMode] = useState("light");

  const [text, setText] = useState("text-[#151719]");
  const [input, setInput] = useState("bg-[#ffffff]");
  const [bg, setBg] = useState("bg-[#fafafa]");

  const setModeHandler = () => {
    if (mode === "light") {
      // set dark:
      setText("text-[hsl(0,_0%,_100%)]");
      setBg("bg-[hsl(207,_26%,_17%)]");
      setInput("bg-[hsl(209,_23%,_22%)]");
      setMode("dark");
    } else {
      setText("text-[#151719]");
      setBg("bg-[#fafafa]");
      setInput("bg-[#ffffff]");
      setMode("light");
    }
  };

  return (
    <>
      <Router>
        <div
          className={`min-h-screen ${bg + " " + text}`}
          style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px" }}>
          <Header
            setModeHandler={setModeHandler}
            text={text}
            input={input}
            bg={bg}
            mode={mode}
          />
          <Routes>
            <Route
              path="/"
              element={<Main bg={bg} input={input} text={text} mode={mode} />}
            />
            <Route
              path="/detail/:name"
              element={<Detail input={input} text={text} bg={bg} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
