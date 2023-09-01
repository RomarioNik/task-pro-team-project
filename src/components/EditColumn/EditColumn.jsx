import { Button } from 'components/Button/Button';
import css from './EditColumn.module.css';
import { Icon } from 'components/Svg/Icon';
const EditColumn = ({ id }) => {
  const handlerEditColumn = () => {};
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
        <Button type="submit" className={css.editColumn_btn}>
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
