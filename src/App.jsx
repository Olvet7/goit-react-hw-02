import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback"

import "./App.css";
import Options from "./components/Options/Options";

const App = () => {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedbackType((prevState)=> ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }))

  }

  return (
    <div>
      <Description />
      <Options feedbackBtn={feedbackType} onClick={updateFeedback}/>
      <Feedback feedbackType={feedbackType} />
    </div>
  );
};

export default App;
