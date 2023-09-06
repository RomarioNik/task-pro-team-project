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
  transportCard,
} from './boardsOperations';
import { toast } from 'react-hot-toast';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  // toast.error(`Something went wrong`);
};

const handleFulfilledGetAllBoards = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = payload;
};

const handleFulfilledGetBoardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  if (payload.columns.length && payload.columns[0]._id) {
    state.shownBoard = payload;
  } else {
    state.shownBoard = payload;
    state.shownBoard.columns = [];
  }
};

const handleFulfilledAddBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  // state.allBoards.unshift(payload);
  state.allBoards.push(payload);
  state.shownBoard._id = payload._id;
  state.shownBoard.backgroundURL = payload.backgroundURL;
  state.shownBoard.columns = [];
};

const handleFulfilledDeleteBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = state.allBoards.filter(({ _id }) => _id !== payload);
  state.shownBoard = {
    columns: [],
    backgroundURL: {},
  };
  toast.success(`Board deleted`);
};

const handleFulfilledUpdateBoard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.allBoards = state.allBoards.map(el =>
    el._id === payload._id ? (el = payload) : el
  );
  state.shownBoard.backgroundURL = payload.backgroundURL;
  toast.success(`Board updated`);
};

const handleFulfilledAddColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  payload.cards = [];
  state.shownBoard.columns.push(payload);
};

const handleFulfilledDeleteColumn = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.shownBoard.columns = state.shownBoard.columns.filter(
    ({ _id }) => _id !== payload
  );
  toast.success(`Column deleted`);
};

const handleFulfilledUpdateColumnById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const array = state.shownBoard.columns;
  const columnIndex = array.findIndex(el => el._id === payload._id);
  if (columnIndex !== -1) {
    array[columnIndex].title = payload.title;
  }
  toast.success(`Column updated`);
};

const handleFulfilledAddCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;

  const array = state.shownBoard.columns;
  const columnIndex = array.findIndex(el => el._id === payload.column);
  if (columnIndex !== -1) {
    array[columnIndex].cards.push(payload);
  }
};

const handleFulfilledDeleteCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const array = state.shownBoard.columns;
  const columnIndex = array.findIndex(el => el._id === payload.column);
  if (columnIndex !== -1) {
    array[columnIndex].cards = array[columnIndex].cards.filter(
      ({ _id }) => _id !== payload._id
    );
  }
  toast.success(`Card deleted`);
};

const handleFulfilledUpdateCardById = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const array = state.shownBoard.columns;
  const columnIndex = array.findIndex(el => el._id === payload.column);
  if (columnIndex !== -1) {
    array[columnIndex].cards = array[columnIndex].cards.map(el =>
      el._id === payload._id ? (el = payload) : el
    );
  }
  toast.success(`Card updated`);
};

const handleFulfilledTransportCard = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  console.log(payload);
  const array = state.shownBoard.columns;
  const newColumnIndex = array.findIndex(el => el._id === payload.column);
  if (newColumnIndex !== -1) {
    array[newColumnIndex].cards.push(payload);
  }

  const oldColumnIndex = array.findIndex(el => el._id === payload.oldColumnId);
  if (oldColumnIndex !== -1) {
    array[oldColumnIndex].cards = array[oldColumnIndex].cards.filter(
      ({ _id }) => _id !== payload._id
    );
  }
  toast.success(`Card moved`);
};

const initialState = {
  allBoards: [],
  shownBoard: {
    columns: [],
  },
  isLoading: false,
  error: null,
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,

  reducers: {
    goHome(state) {
      state.shownBoard = {
        columns: [],
        backgroundURL: {},
      };
    },
  },

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
      .addCase(transportCard.fulfilled, handleFulfilledTransportCard)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const boardsReducer = boardsSlice.reducer;
export const { goHome } = boardsSlice.actions;
