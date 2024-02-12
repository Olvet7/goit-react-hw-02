import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";

import "./App.css";
import Options from "./components/Options/Options";

const App = () => {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedbackType");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackType", JSON.stringify(feedbackType));
  }, [feedbackType]);

  const resetFeedback = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    return feedbackType;
  }
  
  const updateFeedback = (feedbackType) => {
    setFeedbackType((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = Number(
    feedbackType.good + feedbackType.neutral + feedbackType.bad
  );

  const positiveFeedback = Math.round(
    ((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options onClick={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback}/>
      {totalFeedback ? (<Feedback feedbackType={feedbackType} positiveFeedback={positiveFeedback}/>) : (<p>No feedback yet</p>)}
    </div>
  );
};

export default App;
