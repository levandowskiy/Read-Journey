import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  getBooksRecomended,
  addBooksById,
  deleteBooksById,
  readingBook,
} from '../api/books';

export const getBooksThunk: any = createAsyncThunk(
  'books/getBooks',
  async (page: any) => {
    return await getBooksRecomended(page);
  }
);

export const addBookThunk: any = createAsyncThunk(
  'books/addBook',
  async (id: string) => {
    return await addBooksById(id);
  }
);

export const deleteBookThunk: any = createAsyncThunk(
  'books/deleteBook',
  async (id: string) => {
    return await deleteBooksById(id);
  }
);

export const readingBookThunk: any = createAsyncThunk(
  'books/readingBook',
  async ({ id, page, isReading }: { id: string; page: string, isReading: boolean }) => {
    return await readingBook(id, page, isReading);
  }
);

// readingBook

const initialState: any = {
  items: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  totalPages: 1,
  library: [],
  isReading: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.currentPage = action.payload + 1;
    },
    prevPage: (state, action) => {
      state.currentPage = action.payload - 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBooksThunk.pending, state => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getBooksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch books';
      })
      .addCase(addBookThunk.fulfilled, (state, action) => {
        state.library.push(action.payload);
      })
      .addCase(deleteBookThunk.fulfilled, (state, action) => {
        state.library = state.library.filter(
          (book: any) => book._id !== action.payload.id
        );
      })
      .addCase(readingBookThunk.fulfilled, (state, action) => {
        const readingStatus = action.payload.readStatus

        if(readingStatus === "start"){
          state.isReading =  true; 
        }else {
          state.isReading =  false; 
        }    
      });
  },
});

export const booksSliceReducers = booksSlice.reducer;
export const { nextPage, prevPage } = booksSlice.actions;
