import { useState } from "react";

function App() {
  const arr = [
    { red: "bg-red-600" },
    { blue: "bg-blue-600" },
    { green: "bg-green-600" },
    { purple: "bg-purple-600" },
    { black: "bg-black" },
  ];

  const [bgColor, setBgColor] = useState("bg-white");

  const changeColor = (val) => {
    setBgColor(Object.values(val));
  };

  return (
    <div className={` ${bgColor} min-h-screen py-1`}>
      <div className="w-3/4 h-20 bg-slate-700 mx-auto my-52 rounded-3xl flex justify-between">
        {arr.map((val) => {
          return (
            <button
              key={Object.keys(val)}
              onClick={() => changeColor(val)}
              className={`w-[130px] text-white px-6 ${Object.values(
                val
              )} m-4 rounded-2xl`}
            >
              {Object.keys(val)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
