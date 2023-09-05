import { useShownBoard } from 'hooks/useShownBoard';
import css from './ChangeColumn.module.css';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { transportCard } from 'redux/boards/boardsOperations';
import { Icon } from 'components/Svg/Icon';

const ChangeColumn = ({ columnId, handlerClose, cardId }) => {
  const columns = useShownBoard().columns.filter(({ _id }) => _id !== columnId);
  const dispatch = useDispatch();

  const handlerClick = newColumnId => {
    console.log(columnId, '-ид старой колонки');
    console.log(cardId, '-ид карточки');
    console.log(newColumnId, '- новый ид');

    const changeColumnData = {
      _id: cardId,
      moveData: {
        source: columnId,
        destination: newColumnId,
      },
    };
    dispatch(transportCard(changeColumnData));
    handlerClose();
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {columns.length !== 0
          ? columns.map(el => (
              <li key={el._id}>
                <Button
                  className={css.btn}
                  handlerClick={() => handlerClick(el._id)}
                >
                  {el.title}
                  <Icon id={'broken-right'} className={css.icon} />
                </Button>
              </li>
            ))
          : 'нет колонок'}
      </ul>
    </div>
  );
};

export default ChangeColumn;

//
