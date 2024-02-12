import css from "../Feedback/Feedback.module.css"

const Feedback = ({ feedbackType: { good, neutral, bad }, positiveFeedback}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}><p>Good: {good}</p></li>
      <li className={css.item}><p>Neutral: {neutral}</p></li>
      <li className={css.item}><p>Bad: {bad}</p></li>
      <li className={css.item}><p>Positive: {positiveFeedback}%</p></li>
    </ul>
  );
};

export default Feedback;