import { Icon } from '../Svg/Icon';
import styles from './NewBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from 'redux/boards/boardsOperations';
const NewBoard = ({openModal}) => {
  const [icons, setIcons] = useState('project');
  const [background, setBackground] = useState(null);
const  [title,setTitle] = useState(null)
const dispatch = useDispatch()
  const getTitle = event => {
    setTitle(event.target.value);
  };

  const getIcon = event => {
    setIcons(event.currentTarget.dataset.source);
  };

  const getBack = event => {
    console.log(event.currentTarget.dataset.source);
    setBackground(event.currentTarget.dataset.source);
  };

  const newBoardObject = {
    title:title,
    icon:icons,
    background:background
  }

  const newBoardFunc = () => {
dispatch(addBoard(newBoardObject))
  }

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
          <button
            data-source="project"
            className={styles.buttonIcons}
            onClick={getIcon}
          >
            <Icon id={'project'} className={icons === 'project' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="star">
            <Icon id={'star'}className={icons === 'star' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="loading">
            <Icon id={'loading'} className={icons === 'loading' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="puzzle-piece">
            <Icon id={'puzzle-piece'} className={icons === 'puzzle-piece' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="container">
            <Icon id={'container'} className={icons === 'container' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="lightning">
            <Icon id={'lightning'} className={icons === 'lightning' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="colors">
            <Icon id={'colors'} className={icons === 'colors' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="hexagon">
            <Icon id={'hexagon'} className={icons === 'hexagon' ? styles.serIcons : styles.darkIcons}></Icon>
          </button>
        </li>
      </ul>
      <h3 className={styles.textBackground}>Background</h3>
      <ul className={styles.listColorIcons}>
        <li className={background === "no-background" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="no-background"></button>
        </li>
        <li className={background === "magnolia" ? styles.listItemActive : styles.listItem}>
          <button className={styles.buttonBack } onClick={getBack} data-source="magnolia"></button>
        </li>
        <li className={background === "starry-sky" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="starry-sky"></button>
        </li>
        <li className={background === "sakura" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="sakura"></button>
        </li>
        <li className={background === "half-moon" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="half-moon"></button>
        </li>
        <li className={background === "palm-leaves" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="palm-leaves"></button>
        </li>
        <li className={background === "clouds" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="clouds"></button>
        </li>
        <li className={background === "rocky-beach" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="rocky-beach"></button>
        </li>
        <li className={background === "violet-circle" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="violet-circle"></button>
        </li>
        <li className={background === "full-moon" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="full-moon"></button>
        </li>
        <li className={background === "yacht" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="yacht"></button>
        </li>
        <li className={background === "baloon" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="baloon"></button>
        </li>
        <li className={background === "mountains" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="mountains"></button>
        </li>
        <li className={background === "sea" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="sea"></button>
        </li>
        <li className={background === "cappodocia" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="cappodocia"></button>
        </li>
        <li className={background === "night-trailer" ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source="night-trailer"></button>
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
