import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState(null);
  const getAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <h1 className="text-2xl font-bold mb-4">Advice Generator</h1>
      <button
        onClick={getAdvice}
        className="bg-blue-400 text-white font-bold rounded-lg p-1.5 px-2 cursor-pointer mb-3"
      >
        Generate
      </button>
      {advice ? (
        <div className="text-center bg-white rounded-lg shadow p-4">
          <p className="font-semibold">"{advice.slip.advice}"</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
