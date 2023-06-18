import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { initialState } from './initial';


const handleFulfilledGet = (state, { payload }) => { state.contacts = payload };
const handleFulfilledAdd = (state, { payload }) => { state.contacts.push(payload) };
const handleFulfilledDelete = (state, { payload }) => { state.contacts = (state.contacts.filter(el => el.id !== payload.id)) };

const handlePending = (state) => {
  state.isLoading = true
};

const handleFulfilled = (state) => {
  state.isLoading = false
  state.error = ''
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false
  state.error = payload
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

    extraReducers: builder =>
    builder
        .addCase(fetchContacts.fulfilled, handleFulfilledGet)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(fetchContacts.fulfilled, addContact.fulfilled, deleteContact.fulfilled),
      handleFulfilled  
      )
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending
        ),
       handlePending
      )
      .addMatcher(
        isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
        handleRejected
      ),
    })

export const contactsReducer = contactsSlice.reducer;