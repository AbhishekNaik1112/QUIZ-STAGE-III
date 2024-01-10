import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResultsCP = () => {
  console.log("kk",useParams())

  const { score } = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-3xl font-bold mb-8">
        <div>Final Results</div>
        <div className="text-xl mt-4">
          {score} out of 15 correct - {((score / 15) * 100).toFixed(2)}%
        </div>
        <div className="mt-8 space-y-4 space-x-4">
          <Link to="/play">
            <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
              Restart
            </button>
          </Link>
          <Link to="/">
            <button className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsCP;
