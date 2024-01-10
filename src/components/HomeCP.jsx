import React from "react";
import { Link } from "react-router-dom";

const HomeCP = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Quiz Game</h1>
      </div>
      <div>
        <Link to="play">
          <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
            PLAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCP;
