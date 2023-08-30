
import { Icon } from "img/svg/Icon"
import styles from './NewBoard.module.css';

const NewBoard = () => {

return (
    <div className={styles.divCard}>
        {/* <button>X</button> */}
<h2 className={styles.textNew}>New board</h2>
<input className={styles.titleInput} type="text" />
<h3 className={styles.textIcons}>Icons</h3>
<ul className={styles.listDarkIcons}>
    <li><Icon id={'project'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'star'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'loading'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'puzzle-piece'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'container'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'lightning'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'colors'} className={styles.darkIcons}></Icon></li>
    <li><Icon id={'hexagon'} className={styles.darkIcons}></Icon></li>
</ul>
<h3 className={styles.textBackground}>Background</h3>
<ul className={styles.listColorIcons}>
    <li className={styles.listItem}><img src="../../img/background_list_icons/clouds.jpg" alt=""/></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
    <li className={styles.listItem}></li>
</ul>
<button className={styles.mainButton}><div className={styles.plusBtnZaglushka}></div>Create</button>
    </div>
)
 }

 export default NewBoard