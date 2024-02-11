import css from "../Options/Options.module.css"

const Options = ({feedbackBtn, onClick}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button type="button" onClick={() => onClick("good")}>Good</button>
      </li>
      <li className={css.item}>
        <button type="button" onClick={() => onClick("neutral")}>Neutral</button>
      </li>
      <li className={css.item}>
        <button type="button" onClick={() => onClick("bad")}>Bad</button>
      </li>
    </ul>
  );
};

export default Options;
