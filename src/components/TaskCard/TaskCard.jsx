import css from "./TaskCard.module.css";

import cn from "classnames";

const TaskCard = ({ data, onDelete, onEdit, onChange }) => {
  const { title, description, priority, deadline } = data;

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, "0")}/${month
      .toString()
      .padStart(2, "0")}/${year}`;
  };

  const onDateCompare = (isoDate) => {
    const date = new Date();
    const currentDate = date.toISOString();

    if (isoDate === currentDate) {
      return true;
    }

    return false;
  };

  return (
    <div className={css.wrap}>
      <div
        className={cn(css.priorityIndicator, {
          [css.priorityDefault]: priority === "Default",
          [css.priorityLow]: priority === "Low",
          [css.priorityMedium]: priority === "Medium",
          [css.priorityHigh]: priority === "High",
        })}
      ></div>
      <div className={css.content}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.description}>{description}</p>
        <div className={css.additionsWrap}>
          <div className={css.addition}>
            <span className={css.additionLabel}>Priority</span>
            <div className={css.priorityWrap}>
              <div
                className={cn(css.priorityIcon, {
                  [css.priorityDefault]: priority === "Default",
                  [css.priorityLow]: priority === "Low",
                  [css.priorityMedium]: priority === "Medium",
                  [css.priorityHigh]: priority === "High",
                })}
              ></div>
              <span className={css.additionValue}>{priority}</span>
            </div>
          </div>
          <div className={css.addition}>
            <span className={css.additionLabel}>Deadline</span>
            <span className={css.additionValue}>{formatDate(deadline)}</span>
          </div>
          <div className={css.actionsWrap}>
            {onDateCompare() && <div className={css.deadlineIcon}></div>}
            <ul className={css.actions}>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={onChange}
                  className={css.actionBtn}
                ></button>
              </li>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={onEdit}
                  className={css.actionBtn}
                ></button>
              </li>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={onDelete}
                  className={css.actionBtn}
                >
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
