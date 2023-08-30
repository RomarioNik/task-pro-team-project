import { useSelector } from 'react-redux';
import { selectShownBoard } from 'redux/boards/boardsSelectors';

export const useShownBoard = () => useSelector(selectShownBoard);
