import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch("http://localhost:4000/todos");
    return await res.json();
  }
);


export const todosSlice = createSlice({
  // todosSlice fonksıyonunu bir state parçası olusturduk. Stateimizin ismi todos
  name: "todos",
  initialState: {
    items: [],
    active: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    // state'in durumunu degıstırecek olan reducer'lar.
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title,
          },
        };
      },
    },
    toggle: (state, action) => {
      // state parametresi state'in mevcut durumu, action parametresi ise toggle fonksıyonu tarafından yapılması gereken bır ıslemı tanımlar İşlam sırasında gerekli olan veriler payload degıskenınde saklanır.
      const { id } = action.payload;

      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const { id } = action.payload;
      const filteredItem = state.items.filter((item) => item.id !== id);
      state.items = filteredItem;
    },
    changeActiveFilter: (state, action) => {
      state.active = action.payload;
    },
    deletedCompleted: (state) => {
      const filtered = state.items.filter((todo) => todo.completed === false);
      state.items = filtered;
    },
  },
  //extraReducers, getTodosAsync adlı bir asyncThunk'ın durumunu (pending, fulfilled veya rejected) takip eder ve buna göre durum değişikliği için gerekli olan değişiklikleri yapar.
  extraReducers: (builder) => {
    builder.addCase(getTodosAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});


// selectors
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.active === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.active === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};

export const {
  addTodo,
  toggle,
  destroy,
  changeActiveFilter,
  deletedCompleted,
} = todosSlice.actions; // destructuring ?
export default todosSlice.reducer; // store da import edip reducer fieldına verecegız.
