import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  getBoardById,
  addBoard,
  deleteBoard,
  updateBoard,
  addColumn,
  deleteColumn,
  updateColumnById,
  addCard,
  deleteCard,
  updateCardById,
} from './boardsOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGetAllBoards = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
};

const handleFulfilledGetBoardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard = payload;
};

const handleFulfilledAddBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards.push(payload);
};

const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = state.allBoards.filter(({ _id }) => _id !== payload);
};

const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = state.allBoards.map(el =>
    el._id === payload._id ? (el = payload) : el
  );
};

const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns.push(payload);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = state.shownBoard.columns.filter(
    ({ _id }) => _id !== payload
  );
};

const handleFulfilledUpdateColumnById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = state.shownBoard.columns.map(el =>
    el._id === payload._id ? (el = payload) : el
  );
};

const handleFulfilledAddCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns.find(el =>
    el._id === payload._id ? el.cards.push(payload) : el
  );
};

const handleFulfilledDeleteCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  console.log(payload);
  //знайти по айді колонку, в ній по айді відфільтрувати зайву картку
  state.shownBoard.columns.find(el =>
    el._id === payload.column
      ? el.cards.filter(({ _id }) => _id !== payload._id)
      : el
  );
};

const handleFulfilledUpdateCardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns.find(el =>
    el._id === payload.column
      ? el.cards.map(el => (el._id === payload._id ? (el = payload) : el))
      : el
  );
};

const initialState = {
  allBoards: [],
  shownBoard: {},
  isLoading: false,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllBoards.fulfilled, handleFulfilledGetAllBoards)
      .addCase(getBoardById.fulfilled, handleFulfilledGetBoardById)
      .addCase(addBoard.fulfilled, handleFulfilledAddBoard)
      .addCase(deleteBoard.fulfilled, handleFulfilledDeleteBoard)
      .addCase(updateBoard.fulfilled, handleFulfilledUpdateBoard)
      .addCase(addColumn.fulfilled, handleFulfilledAddColumn)
      .addCase(deleteColumn.fulfilled, handleFulfilledDeleteColumn)
      .addCase(updateColumnById.fulfilled, handleFulfilledUpdateColumnById)
      .addCase(addCard.fulfilled, handleFulfilledAddCard)
      .addCase(deleteCard.fulfilled, handleFulfilledDeleteCard)
      .addCase(updateCardById.fulfilled, handleFulfilledUpdateCardById)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const boardsReducer = boardsSlice.reducer;
