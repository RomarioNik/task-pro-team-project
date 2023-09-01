import { Icon } from '../Svg/Icon';
import styles from './NewBoard.module.css';
import { useState } from 'react';

const NewBoard = () => {
  const [icons, setIcons] = useState('project');
  const [background, setBackground] = useState(null);
const  [title,setTitle] = useState(null)
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
        <li className={background === 'backgroundik0' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik0'></button>
        </li>
        <li className={background === 'backgroundik1' ? styles.listItemActive : styles.listItem}>
          <button className={styles.buttonBack } onClick={getBack} data-source='backgroundik1'></button>
        </li>
        <li className={background === 'backgroundik2' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik2'></button>
        </li>
        <li className={background === 'backgroundik3' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik3'></button>
        </li>
        <li className={background === 'backgroundik4' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik4'></button>
        </li>
        <li className={background === 'backgroundik5' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik5'></button>
        </li>
        <li className={background === 'backgroundik6' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik6'></button>
        </li>
        <li className={background === 'backgroundik7' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik7'></button>
        </li>
        <li className={background === 'backgroundik8' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik8'></button>
        </li>
        <li className={background === 'backgroundik9' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik9'></button>
        </li>
        <li className={background === 'backgroundik10' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik10'></button>
        </li>
        <li className={background === 'backgroundik11' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik11'></button>
        </li>
        <li className={background === 'backgroundik12' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik12'></button>
        </li>
        <li className={background === 'backgroundik13' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik13'></button>
        </li>
        <li className={background === 'backgroundik14' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik14'></button>
        </li>
        <li className={background === 'backgroundik15' ? styles.listItemActive : styles.listItem }>
          <button className={styles.buttonBack} onClick={getBack} data-source='backgroundik15'></button>
        </li>
      </ul>
      <button className={styles.mainButton}>
        <div className={styles.plusBtnZaglushka}>
          <Icon id={'plus'} className={styles.plusIcon}></Icon>
        </div>
        Create
      </button>
    </div>
  );
};

export default NewBoard;
