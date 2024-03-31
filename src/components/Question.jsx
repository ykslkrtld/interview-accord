import { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";

const Question = ({ question }) => {
  const [upDown, setUpDown] = useState(false);

  const handleUpDown = (id) => {
    setUpDown(!upDown);
  };

  return (
    <div className="container">
      <div className="text">
        {upDown ? (
          <>
            <div className="card">
              <h1>
                {question.id}.{question.question}
              </h1>
              <span onClick={handleUpDown}>{arrowup}</span>
            </div>
            <p>{question.answer}</p>
          </>
        ) : (
          <div className="card">
            <h1>
              {question.id}.{question.question}
            </h1>
            <span onClick={handleUpDown}>{arrowdown}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
