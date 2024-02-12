import css from "../Options/Options.module.css"

const Options = ({ onClick}) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.btn} type="button" onClick={() => onClick("good")}>Good</button>
      </li>
      <li className={css.item}>
        <button className={css.btn} type="button" onClick={() => onClick("neutral")}>Neutral</button>
      </li>
      <li className={css.item}>
        <button className={css.btn} type="button" onClick={() => onClick("bad")}>Bad</button>
      </li>
    </ul>
  );
};

export default Options;
