import { Button } from 'components/Button/Button';
import css from './EditColumn.module.css';
import { Icon } from 'components/Svg/Icon';
import { useDispatch } from 'react-redux';
import { updateColumnById } from 'redux/boards/boardsOperations';
const EditColumn = ({ id, close }) => {
  const dispatch = useDispatch();
  const handlerEditColumn = evt => {
    evt.preventDefault();
    const title = evt.target.title.value.trim();
    const editColumn = {
      _id: id,
      newColumnData: {
        title,
      },
    };
    if (title !== '') {
      dispatch(updateColumnById(editColumn));
      close();
    }
    return;
  };
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
