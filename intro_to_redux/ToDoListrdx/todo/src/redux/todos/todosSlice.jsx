import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  // todosSlice fonksıyonunu bir state parçası olusturduk. Stateimizin ismi todos
  name: "todos",
  initialState: {
    items: [],
    active: "all",
  },
  reducers: {
    // state'in durumunu degıstırecek olan reducer'lar.
    addTodo: {
      reducer:(state,action)=>{
        state.items.push(action.payload)
      },
      prepare:({title}) =>{
        return {
          payload:{
            id:nanoid(),
            completed:false,
            title
          }
        }
      }
    },
    // addTodo: (state, action) => {
    //   state.items.push({
    //   id: nanoid(),
    //   title: action.payload.title,
    //   completed: false
    //   });
    //   }, yukarıdaki kod blogunu bu sekılde yazsaydıkta calısıyordu 
    
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
