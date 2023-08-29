import { useSelector } from 'react-redux';
import { selectIsBoardsLoading } from 'redux/boards/boardsSelectors';

export const useBoardsLoading = () => useSelector(selectIsBoardsLoading);
