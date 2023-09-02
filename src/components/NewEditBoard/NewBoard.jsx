import { Icon } from '../Svg/Icon';
import styles from './NewBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/boards/boardsOperations';
const NewBoard = ({ openModal }) => {
  const [icons, setIcons] = useState('project');
  const [background, setBackground] = useState(null);
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  const getTitle = event => {
    setTitle(event.target.value);
  };

const closeModal = (event) => {
  openModal()
}

  const getIcon = event => {
    setIcons(event.currentTarget.dataset.source);
    console.log(icons)
  };

  const getBack = event => {
    console.log(event.currentTarget.dataset.source);
    setBackground(event.currentTarget.dataset.source);
  };

  const newBoardObject = {
    title: title,
    icon: icons,
    background: background,
  };

  const newBoardFunc = () => {
    dispatch(addBoard(newBoardObject));
   closeModal()
  };

  return (
    <div className={styles.divCard}>
      <h2 className={styles.textNew}>New board</h2>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="Title"
        onChange={getTitle}
      />
      <h3 className={styles.textIcons}>Icons</h3>
      <ul className={styles.listDarkIcons}>
        <li>
          {/* <button
            data-source="project"
            className={styles.buttonIcons}
            onClick={getIcon}
          > */}
          <input type="radio" data-source="project" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'project'}
              className={
                icons === 'project' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>

        </li>
        <li>
        <input type="radio" data-source="star" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'star'}
              className={icons === 'star' ? styles.darkIcons : styles.serIcons}
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="loading" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'loading'}
              className={
                icons === 'loading' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="puzzle-piece" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'puzzle-piece'}
              className={
                icons === 'puzzle-piece' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="container" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'container'}
              className={
                icons === 'container' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="lightning" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'lightning'}
              className={
                icons === 'lightning' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="colors" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'colors'}
              className={
                icons === 'colors' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
        <li>
        <input type="radio" data-source="hexagon" name='buttons'  className={styles.inputRad} onClick={getIcon}/>
            <Icon
              id={'hexagon'}
              className={
                icons === 'hexagon' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
        </li>
      </ul>
      <h3 className={styles.textBackground}>Background</h3>
      <ul className={styles.listColorIcons}>
        <li
          className={
            background === 'no-background'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="no-background"
          ></button>
        </li>
        <li
          className={
            background === 'magnolia' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="magnolia"
          ></button>
        </li>
        <li
          className={
            background === 'starry-sky'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="starry-sky"
          ></button>
        </li>
        <li
          className={
            background === 'sakura' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="sakura"
          ></button>
        </li>
        <li
          className={
            background === 'half-moon' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="half-moon"
          ></button>
        </li>
        <li
          className={
            background === 'palm-leaves'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="palm-leaves"
          ></button>
        </li>
        <li
          className={
            background === 'clouds' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="clouds"
          ></button>
        </li>
        <li
          className={
            background === 'rocky-beach'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="rocky-beach"
          ></button>
        </li>
        <li
          className={
            background === 'violet-circle'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="violet-circle"
          ></button>
        </li>
        <li
          className={
            background === 'full-moon' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="full-moon"
          ></button>
        </li>
        <li
          className={
            background === 'yacht' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="yacht"
          ></button>
        </li>
        <li
          className={
            background === 'baloon' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="baloon"
          ></button>
        </li>
        <li
          className={
            background === 'mountains' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="mountains"
          ></button>
        </li>
        <li
          className={
            background === 'sea' ? styles.listItemActive : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="sea"
          ></button>
        </li>
        <li
          className={
            background === 'cappodocia'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="cappodocia"
          ></button>
        </li>
        <li
          className={
            background === 'night-trailer'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <button
            className={styles.buttonBack}
            onClick={getBack}
            data-source="night-trailer"
          ></button>
        </li>
      </ul>
      <button className={styles.mainButton} onClick={newBoardFunc}>
        <div className={styles.plusBtnZaglushka}>
          <Icon id={'plus'} className={styles.plusIcon}></Icon>
        </div>
        Create
      </button>
    </div>
  );
};

export default NewBoard;
