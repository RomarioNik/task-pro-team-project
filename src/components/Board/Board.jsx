import React, { useState } from 'react';
import icon from '../../img/svg/sprite-icon.svg'
import style from './Board.module.css'
// import { Link } from 'react-router-dom';

const Board = () => {
  // const [theme, setTheme] = useState('light');

  // const switchTheme = e => {
  //   setTheme(e.target.value);
  // };
  //*отсюда передать тему в глобальній стейт и записать в юзера

  return (
    <div className={style.sectoion}>
        
      <div className={style.component}>Home Board component</div>
    

      {/* <div>
        <select value={theme} onChange={switchTheme}>
          <option>Light</option>
          <option>Dark</option>
          <option>Violet</option>
        </select>
      </div> */}
      <div className={style.container}>Before starting your project, it is essential <button type='button' className={style.button_create}> to create a board </button> to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.


</div>
    </div>
  );
};

export default Board;
