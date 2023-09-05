import css from './TaskCard.module.css';

import cn from 'classnames';

import { Icon } from './../Svg/Icon';
import { useDispatch } from 'react-redux';
import { deleteCard } from 'redux/boards/boardsOperations';
import Modal from 'components/Modal/Modal';
import CreateCardPopUp from 'components/CreateCardPopUp/CreateCardPopUp';
import { useState } from 'react';
import ChangeColumn from 'components/ChangeColumn/ChangeColumn';

// const TaskCard = ({ data, onDelete, onEdit, onChange }) => {
const TaskCard = ({ data, columnId }) => {
  const dispatch = useDispatch();
  const [isOpenModalEditCard, setIsOpenModalEditCard] = useState(false);
  const [idCardForEdit, setIdCardForEdit] = useState(null);
  const [isOpenChangeColumn, setIsOpenChangeColumn] = useState(false);

  const { _id, title, description, priority, deadline, column } = data;

  const onChange = () => {
    setIsOpenChangeColumn(!isOpenChangeColumn);
  };

  const onDelete = _id => {
    dispatch(deleteCard(_id));
  };

  const onEdit = _id => {
    setIsOpenModalEditCard(!isOpenModalEditCard);
    setIdCardForEdit(_id);
  };

  const formatDate = isoDate => {
    const dateParts = isoDate.split('-');
    const formattedDate = dateParts.join('/');
    return formattedDate;
  };

  const onDateFlip = date => {
    const dateParts = date.split('-');
    const outputString = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    return outputString;
  };

  const onDateCompare = isoDate => {
    const date = new Date();
    const currentDate = date.toISOString();
    if (onDateFlip(isoDate) === currentDate.substring(0, 10)) {
      return true;
    }
    return false;
  };

  return (
    <>
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
          {isOpenChangeColumn && (
            <ChangeColumn
              columnId={columnId}
              handlerClose={onChange}
              cardId={_id}
            />
          )}
        </div>
      </div>
      {isOpenModalEditCard && (
        <Modal openModal={onEdit}>
          <CreateCardPopUp
            column={column}
            _id={idCardForEdit}
            isEditing={true}
            initialValues={{
              title: title,
              description: description,
              priority: priority,
              deadline: deadline,
            }}
            close={onEdit}
          />
        </Modal>
      )}
    </>
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
