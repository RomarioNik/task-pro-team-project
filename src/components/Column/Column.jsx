import React, { useEffect, useState } from 'react';
import { Icon } from '../Svg/Icon';
// import useScrollbar from '../Scroll/index';
import Modal from 'components/Modal/Modal';
import AddColumn from 'components/AddColumn';
import EditColumn from 'components/EditColumn';
// import Card from 'components/Card/Card';
import CreateCardPopUp from 'components/CreateCardPopUp/CreateCardPopUp';
import { deleteColumn } from 'redux/boards/boardsOperations';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import style from './Column.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { useShownBoard } from 'hooks/useShownBoard';
import TaskCard from 'components/TaskCard/TaskCard';
import { getFilter } from 'redux/boards/boardsSelectors';

const Column = () => {
  const [isOpenModalAddColumn, setIsOpenModalAddColumn] = useState(false);
  const [isOpenModalEditColumn, setIsOpenModalEditColumn] = useState(false);
  const [getIdColumn, setIdColumn] = useState(null);
  const [isOpenModalAddCard, setIsOpenModalAddCard] = useState(false);

  const [containerHeight, setContainerHeight] = useState(0);

  const dispatch = useDispatch();

  const shownBoard = useShownBoard();

  const allColumns = shownBoard.columns;

  const currentFilter = useSelector(getFilter);

  const filteredColumns = allColumns.map(column => {
    const result = column.cards.filter(item => item.priority === currentFilter);
    return { ...column, cards: result };
  });
  const columns = currentFilter === '' ? allColumns : filteredColumns;

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addColumn = () => {
    setIsOpenModalAddColumn(!isOpenModalAddColumn);
  };

  const handlerEditColum = () => {
    setIsOpenModalEditColumn(!isOpenModalEditColumn);
  };

  const addCard = () => {
    setIsOpenModalAddCard(!isOpenModalAddCard);
  };

  //----------------скрол-віріант-1-(робочий)---------------------------
  // const columnWrapper = useRef(null);
  // const hasScroll = columns.length >= 1;
  // const hasScroll = true;

  // useScrollbar(columnWrapper, hasScroll);

  return (
    <div
    // style={{ width: hasScroll ? '100%' : 'auto', minWidth: '320px' }}
    // ref={columnWrapper}
    >
      <ul className={style.column__item}>
        {columns.length !== 0 &&
          columns.map(({ title, _id, cards }) => (
            <li key={_id} className={style.column}>
              <div className={style.column__section}>
                <p className={style.column_title}>{title}</p>

                <div className={style.column__edit__button}>
                  <button
                    onClick={e => {
                      handlerEditColum();
                      setIdColumn(_id);
                    }}
                  >
                    <Icon id="pencil" className={style.column__icon} />
                  </button>
                  <button onClick={() => dispatch(deleteColumn(_id))}>
                    <Icon id="trash" className={style.column__icon} />
                  </button>
                </div>
              </div>
              <OverlayScrollbarsComponent>
                <div
                  className={style.card__container}
                  style={{ maxHeight: `${containerHeight - 300}px` }}
                  // style={{ height: `1920px` }}
                >
                  <ul>
                    {cards &&
                      cards.map(card => (
                        <li key={card._id} className={style.card}>
                          <TaskCard data={card} />
                        </li>
                      ))}
                  </ul>
                </div>
              </OverlayScrollbarsComponent>

              <button
                className={style.button_create}
                type="button"
                // onClick={addCard}
                onClick={() => {
                  addCard();
                  setIdColumn(_id);
                }}
              >
                <div className={style.button__icon__background}>
                  <Icon id="plus" className={style.button__create__icon} />
                </div>
                <p className={style.button_create_title}>Add another card</p>
              </button>
            </li>
          ))}
        <li className={style.column}>
          <button
            className={style.button__create__column}
            type="button"
            onClick={addColumn}
          >
            <div className={style.button__icon__bg}>
              <Icon id="plus" className={style.button__icon} />
            </div>
            <p className={style.button__title}>Add another column</p>
          </button>
        </li>
      </ul>
      {isOpenModalAddColumn && (
        <Modal openModal={addColumn}>
          <AddColumn closeModal={addColumn} />
        </Modal>
      )}
      {isOpenModalEditColumn && (
        <Modal openModal={handlerEditColum}>
          <EditColumn id={getIdColumn} close={handlerEditColum} />
        </Modal>
      )}
      {isOpenModalAddCard && (
        <Modal openModal={addCard}>
          <CreateCardPopUp
            id={getIdColumn}
            isEditing={false}
            initialValues={{
              title: '',
              description: '',
              priority: 'without priority',
              deadline: '',
            }}
            close={addCard}
          />
        </Modal>
      )}
    </div>
  );
};

export default Column;

// import React, { useRef, useState } from 'react';
// import { Icon } from '../Svg/Icon';
// import useScrollbar from '../Scroll/index';
// import Modal from 'components/Modal/Modal';
// import AddColumn from 'components/AddColumn';
// import EditColumn from 'components/EditColumn';
// import Card from 'components/Card/Card';
// import CreateCardPopUp from 'components/CreateCardPopUp/CreateCardPopUp';
// import { deleteColumn } from 'redux/boards/boardsOperations';
// import 'overlayscrollbars/overlayscrollbars.css';
// import style from './Column.module.css';
// import { useDispatch } from 'react-redux';

// import { useBoardsList } from 'hooks/useBoardsList';

// const columns = [
//   {
//     title: 'To Do',
//     _id: '1',
//   },
//   {
//     title: 'In progress',
//     _id: '2',
//   },
//   {
//     title: 'Done',
//     _id: '3',
//   },
//   {
//     title: 'Star',
//     _id: '4',
//   },
// ];

// const Column = () => {
//   const [isOpenModalAddColumn, setIsOpenModalAddColumn] = useState(false);
//   const [isOpenModalEditColumn, setIsOpenModalEditColumn] = useState(false);
//   const [getIdColumn, setIdColumn] = useState(null);
//   const [isOpenModalAddCard, setIsOpenModalAddCard] = useState(false);

//   const dispatch = useDispatch();

//   const boards = useBoardsList();
//   console.log(boards)

//   // const {columns} = boards
//   // console.log(columns)

//   const addColumn = () => {
//     setIsOpenModalAddColumn(!isOpenModalAddColumn);
//   };

//   const handlerEditColum = () => {
//     setIsOpenModalEditColumn(!isOpenModalEditColumn);
//   };

//   const addCard = () => {
//     setIsOpenModalAddCard(!isOpenModalAddCard);
//   };

//   // const deleteColumn =() => {
//   //   return alert('STOP!')
//   // }

//   //----------------скрол-віріант-1-(робочий)---------------------------
//   const columnWrapper = useRef(null);
//   const hasScroll = columns.length >= 1;

//   useScrollbar(columnWrapper, hasScroll);

//   return (
//     <div
//       style={{ width: hasScroll ? '100%' : 'auto', minWidth: '320px' }}
//       ref={columnWrapper}
//     >
//       <ul className={style.column__item}>
//         {columns.map(({ title, _id, cards }) => (
//           <li key={_id} className={style.column}>
//             <div className={style.column__section}>
//               <p className={style.column_title}>{title}</p>

//               <div className={style.column__edit__button}>
//                 <button
//                   onClick={e => {
//                     handlerEditColum();
//                     setIdColumn(_id);
//                   }}
//                 >
//                   <Icon id="pencil" className={style.column__icon} />
//                 </button>
//                 <button onClick={() => dispatch(deleteColumn(_id))}>
//                   <Icon id="trash" className={style.column__icon} />
//                 </button>
//               </div>
//             </div>
//             <div className={style.card__container}>
//               <Card />
//             </div>
//             <button
//               className={style.button_create}
//               type="button"
//               onClick={addCard}
//             >
//               <div className={style.button__icon__background}>
//                 <Icon id="plus" className={style.button__create__icon} />
//               </div>
//               <p className={style.button_create_title}>Add another card</p>
//             </button>
//           </li>
//         ))}
//         <li>
//           <button
//             className={style.button__create__column}
//             type="button"
//             onClick={addColumn}
//           >
//             <div className={style.button__icon__bg}>
//               <Icon id="plus" className={style.button__icon} />
//             </div>
//             <p className={style.button__title}>Add another column</p>
//           </button>
//         </li>
//       </ul>
//       {isOpenModalAddColumn && (
//         <Modal openModal={addColumn}>
//           <AddColumn closeModal={addColumn} />
//         </Modal>
//       )}
//       {isOpenModalEditColumn && (
//         <Modal openModal={handlerEditColum}>
//           <EditColumn id={getIdColumn} close={handlerEditColum} />
//         </Modal>
//       )}
//       {isOpenModalAddCard && (
//         <Modal openModal={addCard}>
//           <CreateCardPopUp />
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Column;
