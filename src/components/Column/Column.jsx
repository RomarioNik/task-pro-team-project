import React, { useEffect, useState } from 'react';
import { Icon } from '../Svg/Icon';
// import useScrollbar from '../Scroll/index';
import Modal from 'components/Modal/Modal';
import AddColumn from 'components/AddColumn';
import EditColumn from 'components/EditColumn';
// import Card from 'components/Card/Card';
import CreateCardPopUp from 'components/CreateCardPopUp/CreateCardPopUp';
import { deleteColumn } from 'redux/boards/boardsOperations';
// import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
// import 'overlayscrollbars/overlayscrollbars.css';
import style from './Column.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { useShownBoard } from 'hooks/useShownBoard';
import TaskCard from 'components/TaskCard/TaskCard';
import { getFilter } from 'redux/boards/boardsSelectors';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Column = () => {
  const [isOpenModalAddColumn, setIsOpenModalAddColumn] = useState(false);
  const [isOpenModalEditColumn, setIsOpenModalEditColumn] = useState(false);
  const [getIdColumn, setIdColumn] = useState(null);
  const [isOpenModalAddCard, setIsOpenModalAddCard] = useState(false);

  const [containerHeight, setContainerHeight] = useState(0);

  const dispatch = useDispatch();

  const shownBoard = useShownBoard();
  console.log(shownBoard);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
  });

  const allColumns = shownBoard.columns;

  const currentFilter = useSelector(getFilter);

  // const filteredColumns = allColumns;

  const filteredColumns = allColumns.map(column => {
    if (column.cards) {
      const result = column.cards.filter(
        item => item.priority === currentFilter
      );
      return { ...column, cards: result };
    } else {
      return column;
    }
  });

  const columns = currentFilter === '' ? allColumns : filteredColumns;

  const [state, setState] = useState(columns);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

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

  return (
    <div>
      <ul className={style.column__item}>
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.length !== 0 &&
            columns.map(({ title, _id, cards }, ind) => (
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
                <div
                  className={style.card__container}
                  style={{ maxHeight: `${containerHeight - 300}px` }}
                >
                  <ul className={style.scroll__container}>
                    {cards &&
                      cards.map(card => (
                        <li key={card._id} className={style.card}>
                          <TaskCard data={card} columnId={_id} />
                        </li>
                      ))}
                  </ul>
                </div>

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
        </DragDropContext>

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
            column={getIdColumn}
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
