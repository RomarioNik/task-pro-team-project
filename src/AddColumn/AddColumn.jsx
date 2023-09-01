import { Button } from 'components/Button/Button';
import css from './AddColumn.module.css';
import { Icon } from 'components/Svg/Icon';

const AddColumn = () => {
  return (
    <div className={css.container}>
      <p className={css.addColumn_title}>Add column</p>
      <form>
        <input
          type="text"
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
