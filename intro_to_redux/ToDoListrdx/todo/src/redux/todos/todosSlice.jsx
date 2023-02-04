import {createSlice} from '@reduxjs/toolkit'

export const todosSlice = createSlice({  // todosSlice fonksıyonunu bir state parçası olusturduk. Stateimizin ismi todos
    name: 'todos',
    initialState:{
        items:[
           
        ],
        active:'all'
        
    },
    reducers:{              // state'in durumunu degıstırecek olan reducer'lar. 
        addTodo: (state,action)=>{
            state.items.push(action.payload) // gelen payload state eklenecek. 
        },
        toggle: (state,action)=>{ // state parametresi state'in mevcut durumu, action parametresi ise toggle fonksıyonu tarafından yapılması gereken bır ıslemı tanımlar İşlam sırasında gerekli olan veriler payload degıskenınde saklanır.
            const {id} = action.payload 
            
            const item = state.items.find(item=>item.id === id)
            item.completed = !item.completed
        },
        destroy:(state,action)=>{
            const {id} = action.payload
            const filteredItem = state.items.filter(item=>item.id !== id)
            state.items = filteredItem;
        },
        changeActiveFilter:(state,action)=>{
            state.active=action.payload
        },
        deletedCompleted:(state)=>{
          const filtered =   state.items.filter(todo=> todo.completed ===  false)
          state.items = filtered
        }
    }
})
export const {addTodo,toggle,destroy,changeActiveFilter,deletedCompleted} = todosSlice.actions // destructuring ? 
export default todosSlice.reducer; // store da import edip reducer fieldına verecegız.