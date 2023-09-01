import { Button } from 'components/Button/Button';
import css from './AddColumn.module.css';
import { Icon } from 'components/Svg/Icon';
import { useDispatch } from 'react-redux';
import { addColumn } from 'redux/boards/boardsOperations';
import { useParams } from 'react-router-dom';

const AddColumn = () => {
  const board = useParams(); //необхідно отримати id дошки!
  const dispatch = useDispatch();
  const handlerTitleColumn = evt => {
    evt.preventDefault();
    const inputValue = evt.target.title.value.trim();
    if (inputValue !== '') {
      console.log(board);
      const newColumn = {
        title: inputValue,
        board: '', // необхідно передати id дошки!!
      };
      dispatch(addColumn(newColumn));
      return;
    }

    return;
  };
  return (
    <div className={css.container}>
      <p className={css.addColumn_title}>Add column</p>
      <form onSubmit={handlerTitleColumn}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={css.addColumn_input}
          autoFocus
        />
        <Button type="submit" className={css.addColumn_btn}>
          <span className={css.iconWrap}>
            <Icon id={'icon-plus'} className={css.icon} />
          </span>
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddColumn;
// проверить инпут, что бы не был пустым + метод trim()
