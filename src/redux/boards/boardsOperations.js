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
  'contacts/deleteBoard',
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
  'contacts/updateBoard',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await apiPrivate.put(`/api/boards/${boardId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
