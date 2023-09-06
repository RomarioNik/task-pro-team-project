import { Button } from 'components/Button/Button';
import css from './EditColumn.module.css';
import { Icon } from 'components/Svg/Icon';
import { useDispatch } from 'react-redux';
import { updateColumnById } from 'redux/boards/boardsOperations';
import { useShownBoard } from 'hooks/useShownBoard';
import { useState } from 'react';

const EditColumn = ({ id, close }) => {
  const { title } = useShownBoard().columns.find(({ _id }) => _id === id);
  const { _id } = useShownBoard();
  const [editColumnValue, setEditColumnValue] = useState(title);

  const dispatch = useDispatch();

  const handlerEditColumn = evt => {
    evt.preventDefault();

    const editColumn = {
      _id: id,
      newColumnData: {
        title: editColumnValue,
        board: _id,
      },
    };

    if (editColumnValue.trim() !== '') {
      dispatch(updateColumnById(editColumn));
      close();
    }
    return;
  };

  const handlerValue = ({ target }) => setEditColumnValue(target.value);
  return (
    <div className={css.container}>
      <p className={css.editColumn_title}>Edit column</p>
      <form onSubmit={handlerEditColumn}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className={css.editColumn_input}
          autoFocus
          value={editColumnValue}
          onChange={handlerValue}
        />
        <Button
          type="submit"
          className={css.editColumn_btn}
          onSubmit={handlerEditColumn}
        >
          <span className={css.iconWrap}>
            <Icon id={'icon-plus'} className={css.icon} />
          </span>
          Add
        </Button>
      </form>
    </div>
  );
};

export default EditColumn;
