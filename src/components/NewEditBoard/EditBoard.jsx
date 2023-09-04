import { Icon } from '../Svg/Icon';
import styles from './NewBoard.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBoard } from 'redux/boards/boardsOperations';
import { useNavigate } from 'react-router';
import { useShownBoard } from 'hooks/useShownBoard';

import noBack from '../../img/background_list_icons/no-background.jpg'
import cappodocia from '../../img/background_list_icons/cappodocia.jpg'
import baloon from '../../img/background_list_icons/baloon.jpg'
import clouds from '../../img/background_list_icons/clouds.jpg'
import fullMoon from '../../img/background_list_icons/full-moon.jpg'
import halfMoon from '../../img/background_list_icons/half-moon.jpg'
import magnolia from '../../img/background_list_icons/magnolia.jpg'
import mountains from '../../img/background_list_icons/mountains.jpg'
import nightTrailer from '../../img/background_list_icons/night-trailer.jpg'
import palmLeaves from '../../img/background_list_icons/palm-leaves.jpg'
import rockyBeach from '../../img/background_list_icons/rocky-beach.jpg'
import sakura from '../../img/background_list_icons/sakura.jpg'
import sea from '../../img/background_list_icons/sea.jpg'
import starrySky from '../../img/background_list_icons/starry-sky.jpg'
import violetCircle from '../../img/background_list_icons/violet-circle.jpg'
import yacht from '../../img/background_list_icons/yacht.jpg'



const EditBoard = ({ openModal }) => {
  const {_id,title,icon,background,backgroundURL,owner} = useShownBoard();
  const [icons, setIcons] = useState(icon);
  const [backgroundIcon, setBackground] = useState(background);
  const [titleIc, setTitle] = useState(title);
  const navigate = useNavigate()
  const dispatch = useDispatch();
 


  const getTitle = event => {
    setTitle(event.target.value);
  };

  const closeModal = (event) => {
    openModal()
  }

  const getIcon = event => {
    setIcons(event.currentTarget.dataset.source);
  };

  const getBack = event => {
    console.log(event.currentTarget.dataset.source);
    setBackground(event.currentTarget.dataset.source);
  };

  const editBoardObject = {
    _id,
   title:titleIc,
    icon: icons,
    background: backgroundIcon,
    backgroundURL,
    owner
  };

  const editBoardFunc = () => {
    dispatch(updateBoard(editBoardObject));
    closeModal()
    navigate(`${titleIc}`);
  };

  return (
    <div className={styles.divCard}>
      <h2 className={styles.textNew}>Edit board</h2>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="Title"
        value={titleIc}
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
            <Icon
              id={'project'}
              className={
                icons === 'project' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="star">
            <Icon
              id={'star'}
              className={icons === 'star' ? styles.darkIcons : styles.serIcons}
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="loading">
            <Icon
              id={'loading'}
              className={
                icons === 'loading' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="puzzle-piece">
            <Icon
              id={'puzzle-piece'}
              className={
                icons === 'puzzle-piece' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="container">
            <Icon
              id={'container'}
              className={
                icons === 'container' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="lightning">
            <Icon
              id={'lightning'}
              className={
                icons === 'lightning' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="colors">
            <Icon
              id={'colors'}
              className={
                icons === 'colors' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
        <li>
          <button onClick={getIcon} data-source="hexagon">
            <Icon
              id={'hexagon'}
              className={
                icons === 'hexagon' ? styles.darkIcons : styles.serIcons
              }
            ></Icon>
          </button>
        </li>
      </ul>
      <h3 className={styles.textBackground}>Background</h3>
      <ul className={styles.listColorIcons}>
      <li
          className={
            backgroundIcon === 'no-background'
              ? styles.listItemActive
              : styles.listItem
          }
        >
<input type="radio" name='backs' data-source='no-background' className={styles.inputBack} onClick={getBack}/>
<img src={noBack} alt="noback" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'magnolia' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='magnolia' onClick={getBack}/>
<img src={magnolia} alt="magnolia" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'starry-sky'
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <input type="radio" name='backs' className={styles.inputBack} data-source='starry-sky' onClick={getBack}/>
<img src={starrySky} alt="starrySky" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'sakura' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='sakura' onClick={getBack}/>
<img src={sakura} alt="sakura" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'half-moon' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='half-moon' onClick={getBack}/>
<img src={halfMoon} alt="half-moon" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'palm-leaves'
              ? styles.listItemActive
              : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='palm-leaves' onClick={getBack}/>
<img src={palmLeaves} alt="palm-leaves" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'clouds' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='clouds' onClick={getBack}/>
<img src={clouds} alt="clouds" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'rocky-beach'
              ? styles.listItemActive
              : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='rocky-beach' onClick={getBack}/>
<img src={rockyBeach} alt="rocky-beach" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'violet-circle'
              ? styles.listItemActive
              : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='violet-circle' onClick={getBack}/>
<img src={violetCircle} alt="violet-circle" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'full-moon' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='full-moon' onClick={getBack}/>
<img src={fullMoon} alt="full-moon" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'yacht' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='yacht' onClick={getBack}/>
<img src={yacht} alt="yacht" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'baloon' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='baloon' onClick={getBack}/>
<img src={baloon} alt="baloon" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'mountains' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='mountains' onClick={getBack}/>
<img src={mountains} alt="mountains" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'sea' ? styles.listItemActive : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='sea' onClick={getBack}/>
<img src={sea} alt="sea" className={styles.img_back} />
        </li>
        <li
          className={
            backgroundIcon === 'cappodocia'
              ? styles.listItemActive
              : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='cappodocia' onClick={getBack}/>
<img src={cappodocia} alt="cappodocia" className={styles.img_back}/>
        </li>
        <li
          className={
            backgroundIcon === 'night-trailer'
              ? styles.listItemActive
              : styles.listItem
          }
        >
 <input type="radio" name='backs' className={styles.inputBack} data-source='night-trailer' onClick={getBack}/>
<img src={nightTrailer} alt="night-trailer" className={styles.img_back}  />
        </li>
      </ul>
      <button className={styles.mainButton} onClick={editBoardFunc}>
        <div className={styles.plusBtnZaglushka}>
          <Icon id={'plus'} className={styles.plusIcon}></Icon>
        </div>
        Create
      </button>
    </div>
  );
};

export default EditBoard;