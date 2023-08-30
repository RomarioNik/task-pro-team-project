import React from 'react';
import { Icon } from '../Svg/Icon';
import Column from 'components/Column/Column';
import style from './BoardCreated.module.css';
// import { useParams } from 'react-router-dom';

//-------scroll------------------------- 
// import 'overlayscrollbars/overlayscrollbars.css';
// import useScrollbar from '../Scroll/Scroll';

// import { OverlayScrollbars} from 'overlayscrollbars';
//-----------------------------------------
const BoardCreated = () => {
  // const [theme, setTheme] = useState('light');
  // const { boardName } = useParams();

  //----функція-відкривання-модалки-створення-колонки
  const createColumn = () => {
    console.log('add column');
  };
  
  console.log()

  // OverlayScrollbars({ 
  //   target: document.querySelector('#column__item'),
  //   scrollbars: {
  //     slot: document.querySelector('#column__item').parentElement,
  //   },
  //  }, {});


  //  OverlayScrollbars(document.querySelector('#column__container'), {
  //   overflow: {
  //     x: 'hidden',
  //   },
  // });
    
  return (
    <div >
      {/* <div className={style.title__container}>
        <p className={style.title__board}>{boardName}</p>
      </div> */}
      <div className={style.column__container}>
        <div className={style.column__item}>
          <Column /> 
        </div> 
          <button
          className={style.button__create}
          type="button"
          onClick={createColumn}
        >
          <div className={style.button__icon__background}>
            <Icon id="plus" className={style.button__create__icon} />
          </div>
          <p className={style.button__create__title}>Add another column</p>
        </button>     
      </div>
    </div>
  );
};

export default BoardCreated;
