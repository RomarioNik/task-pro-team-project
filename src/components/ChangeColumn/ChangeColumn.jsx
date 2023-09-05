import { useShownBoard } from 'hooks/useShownBoard';
import css from './ChangeColumn.module.css';
import { Button } from 'components/Button/Button';
const ChangeColumn = ({ id }) => {
  const columns = useShownBoard().columns;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {columns.map((el, index) => (
          <li key={index}>
            <Button className={css.item}>{el.title}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeColumn;
