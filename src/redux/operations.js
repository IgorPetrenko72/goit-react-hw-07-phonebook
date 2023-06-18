import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://64820e9329fa1c5c50328777.mockapi.io/contacts',
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await instanceContacts.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (receivedAddContact, thunkAPI) => {
    try {
      const response = await instanceContacts.post('/contacts', receivedAddContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'Contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await instanceContacts.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);