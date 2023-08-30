import { useSelector } from 'react-redux';
import { selectAllBoardsList } from 'redux/boards/boardsSelectors';

export const useBoardsList = () => useSelector(selectAllBoardsList);
