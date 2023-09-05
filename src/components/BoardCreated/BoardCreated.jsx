import React from 'react';
import Column from 'components/Column/Column';
import style from './BoardCreated.module.css';
// import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// // import { OverlayScrollbars } from 'overlayscrollbars';

const BoardCreated = () => {

  // const scrollContainer = document.getElementById("scrollContainer");
  // const scrollBar = scrollContainer.querySelector(".column__container::-webkit-scrollbar-thumb")

  // if (!scrollBar) {
  //   scrollContainer.classList.add("-webkit-scrollbar-track");
  // }
  // -------------------скрол-варіант-3-(не политів)-----------------------------------

  // useEffect(() => {
  //   const containerElement = document.querySelector('#style.column__container');
  //   const osInstance = OverlayScrollbars(containerElement, {});

  //   return () => {
  //     osInstance.destroy();
  //   };
  // }, []);

  // ------------------скрол-варіант-2-(не политів)-------------------------------------
  // OverlayScrollbars({
  //   target: document.querySelector('#column__item'),
  //   elements: {
  //     viewport: document.querySelector('#column__container'),
  //   },
  //  }, {});

  return (
    //---------------скрол 4 варіант-не-полетів-------
    //<OverlayScrollbarsComponent
    // element="Column"
    // options={{ scrollbars: { autoHide: 'never' } }}
    // events={{ scroll: () => {} }}
    // defer
    //>



    
    <div id="scrollContainer" className={style.column__container}
    
    >



      {/* <OverlayScrollbarsComponent> */}
            <Column />
      {/* </OverlayScrollbarsComponent> */}
  
    </div>

    //</OverlayScrollbarsComponent>
  );
};

export default BoardCreated;
