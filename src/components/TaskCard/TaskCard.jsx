import css from './TaskCard.module.css';

import cn from 'classnames';

import { Icon } from './../Svg/Icon';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'redux/boards/boardsOperations';

// const TaskCard = ({ data, onDelete, onEdit, onChange }) => {
const TaskCard = ({ data }) => {
  const dispatch = useDispatch();

  const { _id, title, description, priority, deadline } = data;

  const onChange = () => {
    console.log('onChange');
  };

  const onDelete = _id => {
    dispatch(deleteCard(_id));
  };

  const onEdit = () => {
    console.log('onEdit');
  };

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;
  };

  const onDateCompare = isoDate => {
    const date = new Date();
    const currentDate = date.toISOString();
    if (isoDate.substring(0, 10) === currentDate.substring(0, 10)) {
      return true;
    }

    return false;
  };

  return (
    <div className={css.wrap}>
      <div
        className={cn(css.priorityIndicator, {
          [css.priorityDefault]: priority === 'without priority',
          [css.priorityLow]: priority === 'low',
          [css.priorityMedium]: priority === 'medium',
          [css.priorityHigh]: priority === 'high',
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
                  [css.priorityDefault]: priority === 'without priority',
                  [css.priorityLow]: priority === 'low',
                  [css.priorityMedium]: priority === 'medium',
                  [css.priorityHigh]: priority === 'high',
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
            {onDateCompare(deadline) && (
              <Icon id="bell" className={css.deadlineIcon}></Icon>
            )}
            <ul className={css.actions}>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={() => onChange(_id)}
                  className={css.actionBtn}
                >
                  <Icon id="broken-right" className={css.actionIcon} />
                </button>
              </li>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={() => onEdit(_id)}
                  className={css.actionBtn}
                >
                  <Icon id="pencil" className={css.actionIcon} />
                </button>
              </li>
              <li className={css.actionItem}>
                <button
                  type="button"
                  onClick={() => onDelete(_id)}
                  className={css.actionBtn}
                >
                  <Icon id="trash" className={css.actionIcon} />
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

// import css from './TaskCard.module.css';

// import cn from 'classnames';

// import { Icon } from './../Svg/Icon';

// const TaskCard = ({ data, onDelete, onEdit, onChange }) => {
//   const { _id, title, description, priority, deadline } = data;

//   const formatDate = isoDate => {
//     const date = new Date(isoDate);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     return `${day.toString().padStart(2, '0')}/${month
//       .toString()
//       .padStart(2, '0')}/${year}`;
//   };

//   const onDateCompare = isoDate => {
//     const date = new Date();
//     const currentDate = date.toISOString();
//     if (isoDate.substring(0, 10) === currentDate.substring(0, 10)) {
//       return true;
//     }

//     return false;
//   };

//   return (
//     <div className={css.wrap}>
//       <div
//         className={cn(css.priorityIndicator, {
//           [css.priorityDefault]: priority === 'without priority',
//           [css.priorityLow]: priority === 'low',
//           [css.priorityMedium]: priority === 'medium',
//           [css.priorityHigh]: priority === 'high',
//         })}
//       ></div>
//       <div className={css.content}>
//         <h4 className={css.title}>{title}</h4>
//         <p className={css.description}>{description}</p>
//         <div className={css.additionsWrap}>
//           <div className={css.addition}>
//             <span className={css.additionLabel}>Priority</span>
//             <div className={css.priorityWrap}>
//               <div
//                 className={cn(css.priorityIcon, {
//                   [css.priorityDefault]: priority === 'without priority',
//                   [css.priorityLow]: priority === 'low',
//                   [css.priorityMedium]: priority === 'medium',
//                   [css.priorityHigh]: priority === 'high',
//                 })}
//               ></div>
//               <span className={css.additionValue}>{priority}</span>
//             </div>
//           </div>
//           <div className={css.addition}>
//             <span className={css.additionLabel}>Deadline</span>
//             <span className={css.additionValue}>{formatDate(deadline)}</span>
//           </div>
//           <div className={css.actionsWrap}>
//             {onDateCompare(deadline) && <Icon id='bell' className={css.deadlineIcon}></Icon>}
//             <ul className={css.actions}>
//               <li className={css.actionItem}>
//                 <button
//                   type="button"
//                   onClick={() => onChange(_id)}
//                   className={css.actionBtn}
//                 >
//                   <Icon id="broken-right" className={css.actionIcon}/>
//                 </button>
//               </li>
//               <li className={css.actionItem}>
//                 <button
//                   type="button"
//                   onClick={() => onEdit(_id)}
//                   className={css.actionBtn}
//                 >
//                   <Icon id="pencil" className={css.actionIcon}/>
//                 </button>
//               </li>
//               <li className={css.actionItem}>
//                 <button
//                   type="button"
//                   onClick={() => onDelete(_id)}
//                   className={css.actionBtn}
//                 >
//                   <Icon id="trash" className={css.actionIcon}/>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
