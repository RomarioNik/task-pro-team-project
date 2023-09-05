import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiPrivate } from 'services/axios';

export const getAllBoards = createAsyncThunk(
  'boards/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await apiPrivate.get('/api/boards');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getById',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await apiPrivate.get(`/api/boards/${boardId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  'boards/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      const { data } = await apiPrivate.post(`/api/boards`, newBoard);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await apiPrivate.delete(`/api/boards/${boardId}`);
      return data.deletedId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ _id, newBoardData }, thunkAPI) => {
    try {
      const { data } = await apiPrivate.put(`/api/boards/${_id}`, newBoardData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'boards/addColumn',
  async (newColumn, thunkAPI) => {
    try {
      const { data } = await apiPrivate.post(`/api/columns`, newColumn);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'boards/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await apiPrivate.delete(`/api/columns/${columnId}`);
      return data.deletedId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateColumnById = createAsyncThunk(
  'boards/updateColumnById',
  async ({ _id, newColumnData }, thunkAPI) => {
    try {
      const { data } = await apiPrivate.put(
        `/api/columns/${_id}`,
        newColumnData
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCard = createAsyncThunk(
  'boards/addCard',
  async (newCard, thunkAPI) => {
    try {
      const { data } = await apiPrivate.post(`/api/cards`, newCard);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'boards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await apiPrivate.delete(`/api/cards/${cardId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateCardById = createAsyncThunk(
  'boards/updateCardById',
  async ({ _id, newCardData }, thunkAPI) => {
    try {
      const { data } = await apiPrivate.put(`/api/cards/${_id}`, newCardData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const transportCard = createAsyncThunk(
  'boards/transportCard',
  async ({ _id, moveData }, thunkAPI) => {
    try {
      const { data } = await apiPrivate.patch(
        `/api/cards/${_id}/transport`,
        moveData
      );
      data.oldColumnId = moveData.source;
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
