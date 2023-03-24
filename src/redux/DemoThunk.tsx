import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'demo/fetchPosts',
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);
